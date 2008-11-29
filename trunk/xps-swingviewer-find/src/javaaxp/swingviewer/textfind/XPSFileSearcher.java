package javaaxp.swingviewer.textfind;


import java.beans.FeatureDescriptor;
import java.util.ArrayList;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;

import javax.swing.SwingUtilities;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.swingviewer.IXPSPageRenderer;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.textfind.ui.GlyphHighlighter;

public class XPSFileSearcher {

	public class SearchCallable implements Callable<Boolean> {
		private int fPageNum;
		private String fSearchString;

		public SearchCallable(String searchString, int i) {
			fPageNum = i;
			fSearchString = searchString;
		}

		@Override
		public Boolean call() throws Exception {
			return searchPage(fSearchString, fPageNum);
		}
	}

	public class SearchFutureTask extends FutureTask<Boolean> {
		private String fSearchString;
		private int fPageNum;

		public SearchFutureTask(Callable<Boolean> callable, String searchString, int i) {
			super(callable);
			fSearchString = searchString;
			fPageNum = i;
		}

		public String getSearchString() {
			return fSearchString;
		}

		public int getPageNum() {
			return fPageNum;
		}
	}
	
	public static enum SearchDirection {
		FORWARD,
		BACKWARD
	};
	
	private PageController fPageController;
	private IXPSPageViewer fCurrentViewer;
	private GlyphHighlighter fGlyphHighlighter;

	public XPSFileSearcher(PageController currentDocumentPageController, IXPSPageViewer currentViewer) {
		fPageController = currentDocumentPageController;
		fCurrentViewer = currentViewer;
	}

	public boolean search(String searchString, SearchDirection direction) {
		removeExistingGlyphHighlighter();
		ExecutorService service = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);
		//examine each page for a glyphs element that contains the search string. If page is after current page, jump to it.
		boolean foundMatch = false;
		try {
			IXPSPageAccess pageAccess = fPageController.getXPSAccess().getPageAccess(fPageController.getXPSAccess(), 0);
			
			ArrayList<SearchFutureTask> searchTasks = new ArrayList<SearchFutureTask>();
			if(direction == SearchDirection.FORWARD){
				for(int i = fPageController.getPageNum() + 1; i < pageAccess.getLastPageNum(); i++){
					searchTasks.add(new SearchFutureTask(new SearchCallable(searchString, i), searchString, i));
					
				}
			} else {
				for(int i = fPageController.getPageNum() - 1; i >= 0; i--){
					searchTasks.add(new SearchFutureTask(new SearchCallable(searchString, i), searchString, i));
				}				
			}
			
			
			for (SearchFutureTask searchFutureTask : searchTasks) {
				service.submit(searchFutureTask);	
			}
			
			
			for (SearchFutureTask futureTask : searchTasks) {
				try {
					if(futureTask.get()){
						//found a match. shutdown the executor service, no longer needed.
						service.shutdownNow();
						setupHighlightRenderer(futureTask.getSearchString());
						fPageController.setPage(futureTask.getPageNum());
						return true;
					}
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} catch (XPSSpecError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return foundMatch;
	}

	private boolean searchPage(String searchString, int i) throws XPSError {
		IDocumentReference docRef = fPageController.getXPSAccess().getFileAccess().getFixedDocumentSequence().getDocumentReference().get(0);	
		IXPSPageAccess pageAccess = fPageController.getXPSAccess().getPageAccess(fPageController.getXPSAccess(), 0);
		IXPSIterator pageIterator = fPageController.getXPSAccess().getPageIterator(pageAccess.getPage(i), fPageController.getXPSAccess(), docRef);
		StringSearchXPSVisitor v = new StringSearchXPSVisitor(searchString);
		pageIterator.accept(v);
		if(v.foundString()){
			return true;
		} else {
			return false;
		}
	}

	private void setupHighlightRenderer(String searchString) {
		fGlyphHighlighter = new GlyphHighlighter(searchString);
		fCurrentViewer.getPageRenderer().addRenderingExtension(fGlyphHighlighter);
	}

	public void findPanelClosed() {
		removeExistingGlyphHighlighter();
	}

	private void removeExistingGlyphHighlighter() {
		if(fGlyphHighlighter != null){
			fCurrentViewer.getPageRenderer().removeRenderingExtension(fGlyphHighlighter);
			fGlyphHighlighter = null;
			fCurrentViewer.getPageRenderer().forceRepaint();
		}
	}
	
	

}
