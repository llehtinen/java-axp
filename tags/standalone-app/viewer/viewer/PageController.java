package viewer;

import java.util.Observable;
import java.util.Observer;

import xps.api.IXPSAccess;
import xps.api.IXPSDocumentAccess;
import xps.api.IXPSPageAccess;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.IDocumentStructure;
import xps.api.model.document.page.IFixedPage;

public class PageController {
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
		fDocumentAccess = fXPSAccess.getDocumentAccess(access);
		fPageAccess = access.getPageAccess(access, fCurrDocNum);
		fPageLoader = new ThreadedPageLoader(fPageAccess);
		fSubject = new PageViewerSubject();
		setPage();
	}
	
	public void addObserver(Observer o){
		fSubject.addObserver(o);
	}
	
	public void removeObserver(Observer o){
		fSubject.deleteObserver(o);
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
}
