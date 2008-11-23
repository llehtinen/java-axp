package javaaxp.swingviewer.service.impl;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.page.IFixedPage;

public class ThreadedPageLoader {
	
	public class PageFetcher implements Runnable {
		private int fPageNum;

		public PageFetcher(int i) {
			fPageNum = i;
		}
		public void run() {
			try {
				try {
					loadPageFromAccess(fPageNum);
				} catch (IllegalArgumentException e){
					//that's ok
				}
			} catch (XPSSpecError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  catch (XPSError e){
				
			}
		}
	}

	private ExecutorService fExecutorService;
	private int fLoading[];
	private int fLoaded[];
	private IXPSPageAccess fPageAccess;
	private IFixedPage fLastPageLoaded;

	public ThreadedPageLoader(IXPSPageAccess pageAccess) {
		fExecutorService = Executors.newSingleThreadExecutor();
		fLoading = null;
		fLoaded = null;
		fPageAccess = pageAccess;
	}
	
	public synchronized IFixedPage loadPage(int pageNum) throws XPSSpecError, XPSError{
		//return fAccess.loadPageFromDocument(docNum, pageNum);
		if(fLoading == null){
			return loadPageAndSetupNext(pageNum);
		} else {
			if(fLoading[0] == pageNum){
				//wait till done
				System.out.println("Already loading, waiting");
				return waitForPageBeingLoaded(pageNum);
			} else {
				System.out.println("Far-off page: wanted " + pageNum + ", loading " + fLoading[0]);
				return loadPageAndSetupNext(pageNum);
			}
		}
	}

	private IFixedPage waitForPageBeingLoaded(int pageNum) {
		
		while(fLoaded == null || (fLoaded[0] != pageNum)){
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		setupNext(pageNum);
		return fLastPageLoaded;
	}



	private IFixedPage loadPageAndSetupNext(int pageNum) throws XPSSpecError, XPSError {
		IFixedPage toReturn = loadPageFromAccess(pageNum);
		setupNext(pageNum);
		return toReturn;
	}
	
	private IFixedPage loadPageFromAccess(int pageNum) throws XPSSpecError, XPSError {
		synchronized(this){
			if(fLoading != null &&  fLoading[0] == pageNum){
				//already being loaded.
				throw new IllegalArgumentException("Page Already being loaded");
			}
			
			
			fLoading = new int[] {pageNum};
			fLoaded = null;
		}
		try {
			fLastPageLoaded =  fPageAccess.getPage(pageNum);
		
		} finally {
			synchronized(this){
				fLoading = null;
				fLoaded = new int[] {pageNum};
				this.notify();
			}
		}
		
		
		return fLastPageLoaded;
	}

	private void setupNext(int pageNum) {
		
		fExecutorService.execute(new PageFetcher(pageNum + 1));
		if(pageNum > 0){
			fExecutorService.execute(new PageFetcher(pageNum - 1));
		}
		fExecutorService.execute(new PageFetcher(pageNum + 2));
		fExecutorService.execute(new PageFetcher(pageNum + 3));
	}
	 

}
