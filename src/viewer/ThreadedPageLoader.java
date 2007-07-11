package viewer;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import xps.XPSError;
import xps.XPSSpecError;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.page.IFixedPage;

public class ThreadedPageLoader {
	
	public class PageFetcher implements Runnable {

		private int fDocNum;
		private int fPageNum;

		public PageFetcher(int docNum, int i) {
			fDocNum = docNum;
			fPageNum = i;
		}
		public void run() {
			try {
				try {
					loadPageFromAccess(fDocNum, fPageNum);
					System.out.println("Finished loading " + fDocNum + ", " + fPageNum);
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
	private XPSZipFileAccess fAccess;
	private IFixedPage fLastPageLoaded;

	public ThreadedPageLoader(XPSZipFileAccess access) {
		fExecutorService = Executors.newSingleThreadExecutor();
		fLoading = null;
		fLoaded = null;
		fAccess = access;
	}
	
	public synchronized IFixedPage loadPage(int docNum, int pageNum) throws XPSSpecError, XPSError{
		//return fAccess.loadPageFromDocument(docNum, pageNum);
		if(fLoading == null){
			return loadPageAndSetupNext(docNum, pageNum);
		} else {
			if(fLoading[0] == docNum && fLoading[1] == pageNum){
				//wait till done
				System.out.println("Already loading, waiting");
				return waitForPageBeingLoaded(docNum, pageNum);
			} else {
				System.out.println("Far-off page: wanted " + pageNum + ", loading " + fLoading[1]);
				return loadPageAndSetupNext(docNum, pageNum);
			}
		}
	}

	private IFixedPage waitForPageBeingLoaded(int docNum, int pageNum) {
		
		while(fLoaded == null || (fLoaded[0] != docNum && fLoaded[1] != pageNum)){
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		setupNext(docNum, pageNum);
		return fLastPageLoaded;
	}



	private IFixedPage loadPageAndSetupNext(int docNum, int pageNum) throws XPSSpecError, XPSError {
		IFixedPage toReturn = loadPageFromAccess(docNum, pageNum);
		setupNext(docNum, pageNum);
		return toReturn;
	}
	
	private IFixedPage loadPageFromAccess(int docNum, int pageNum) throws XPSSpecError, XPSError {
		synchronized(this){
			if(fLoading != null && fLoading[0] == docNum && fLoading[1] == pageNum){
				//already being loaded.
				throw new IllegalArgumentException("Page Already being loaded");
			}
			
			
			fLoading = new int[] {docNum, pageNum};
			fLoaded = null;
		}
		try {
			fLastPageLoaded =  fAccess.loadPageFromDocument(docNum, pageNum);
		
		} finally {
			synchronized(this){
				fLoading = null;
				fLoaded = new int[] {docNum, pageNum};
				this.notify();
			}
		}
		
		
		return fLastPageLoaded;
	}

	private void setupNext(int docNum, int pageNum) {
		
		fExecutorService.execute(new PageFetcher(docNum, pageNum + 1));
		if(pageNum > 0){
			fExecutorService.execute(new PageFetcher(docNum, pageNum - 1));
		}
		fExecutorService.execute(new PageFetcher(docNum, pageNum + 2));
		fExecutorService.execute(new PageFetcher(docNum, pageNum + 3));
	}
	 

}
