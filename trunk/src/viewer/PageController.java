package viewer;

import java.util.Observable;
import java.util.Observer;

import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentStructure;
import xps.model.document.page.IFixedPage;

public class PageController {
	private class PageViewerSubject extends Observable {
		public void pageChanged() {
			setChanged();
			notifyObservers();
		}
	}
	
	private XPSZipFileAccess fXPSAccess;
	private int fCurrDocNum;
	private int fCurrPageNum;
	private IFixedPage fPage;
	private PageViewerSubject fSubject;
	private ThreadedPageLoader fPageLoader;
	
	
	public PageController(XPSZipFileAccess xpsA) throws XPSError {
		fXPSAccess = xpsA;
		fPageLoader = new ThreadedPageLoader(xpsA);
		fCurrDocNum = 0;
		fCurrPageNum = 0;
		
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
			fPage = fPageLoader.loadPage(fCurrDocNum, fCurrPageNum);
			fSubject.pageChanged();
		} catch (XPSError e) {
			e.printStackTrace();
			fPage = null;
		}
	}

	public IDocumentStructure getCurrDocStructure() throws XPSSpecError, XPSError {
		return fXPSAccess.loadDocumentStructure(fCurrDocNum); 
	}

	public void setPageForOutlineTarget(String outlineTarget)  {
		try {
			fCurrPageNum = fXPSAccess.getPageNumberWithLinkTarget(outlineTarget, fCurrDocNum);
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
