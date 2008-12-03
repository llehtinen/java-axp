/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer;

import java.util.Iterator;
import java.util.Observable;
import java.util.Observer;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSDocumentAccess;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentStructure;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.swingviewer.service.impl.ThreadedPageLoader;

public class PageController implements Iterator<IFixedPage>{
	private class PageViewerSubject extends Observable {
		public void pageChanged() {
			setChanged();
			notifyObservers();
		}
	}
	
	private IXPSAccess fXPSAccess;
	private int fCurrDocNum;
	private int fCurrPageNum;
	private IFixedPage fPage;
	private PageViewerSubject fSubject;
	private ThreadedPageLoader fPageLoader;
	private IXPSPageAccess fPageAccess;
	private IXPSDocumentAccess fDocumentAccess;
	
	
	public PageController(IXPSAccess access) throws XPSError {
		fXPSAccess = access;
		fCurrDocNum = 0;
		fCurrPageNum = 0;
		fDocumentAccess = fXPSAccess.getDocumentAccess();
		fPageAccess = access.getPageAccess(fCurrDocNum);
		fPageLoader = new ThreadedPageLoader(fPageAccess);
		fSubject = new PageViewerSubject();
		setPage();
	}
	
	public IXPSAccess getXPSAccess() {
		return fXPSAccess;
	}
	
	public void addObserver(Observer o){
		fSubject.addObserver(o);
	}
	
	public void removeObserver(Observer o){
		fSubject.deleteObserver(o);
	}

	public Observable getObervable() {
		return fSubject;
	}
	
	private void setPage() {
		try {
			fPage = fPageLoader.loadPage(fCurrPageNum);
			fSubject.pageChanged();
		} catch (XPSError e) {
			e.printStackTrace();
			fPage = null;
		}
	}

	public IDocumentStructure getCurrDocStructure() throws XPSSpecError, XPSError {
		return fDocumentAccess.getDocumentStructure(fCurrDocNum); 
	}

	public void setPageForOutlineTarget(String outlineTarget)  {
		try {
			fCurrPageNum = fPageAccess.getPageNumberWithLinkTarget(outlineTarget);
			setPage();
		} catch (XPSError e) {
			e.printStackTrace();
		}
	}


	public void nextPage() {
		fCurrPageNum++;
		setPage();
	}

	public void previousPage() {
		fCurrPageNum--;
		setPage();
	}

	public int getPageNum() {
		return fCurrPageNum;
	}

	public void setPage(int i) {
		fCurrPageNum = i;
		setPage();
	}

	public IFixedPage getPage() {
		return fPage;
	}

	@Override
	public boolean hasNext() {
		return fCurrPageNum < fPageAccess.getLastPageNum();
	}

	@Override
	public IFixedPage next() {
		IFixedPage toReturn = getPage();
		nextPage();
		return toReturn; 
	}

	@Override
	public void remove() {
		// TODO Auto-generated method stub
		
	}
}
