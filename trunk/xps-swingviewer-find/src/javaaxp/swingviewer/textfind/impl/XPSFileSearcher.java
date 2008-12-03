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

package javaaxp.swingviewer.textfind.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.textfind.TextFindController;
import javaaxp.swingviewer.textfind.matchhighlighter.GlyphHighlighter;

public class XPSFileSearcher {

	private PageController fPageController;
	private ExecutorService fExecutorService;
	private Thread fSearchInitiatorThread;

	public XPSFileSearcher(PageController currentDocumentPageController) {
		fPageController = currentDocumentPageController;
	}

	public boolean search(TextFindController controller, String searchString, SearchDirection direction) {
		//terminate any existing search
		terminateExistingSearch();
		boolean foundMatch = false;

		//ensure only one search thread is running at once. If second search thread starts, this should clean up after the first one
		synchronized (this) {
			controller.fireSearchStarted(searchString);
			fExecutorService = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);
			fSearchInitiatorThread = Thread.currentThread();
			try {
				//can this be optimized by using a page controller that's not doing threaded loading? 
				try {
					IXPSPageAccess pageAccess = fPageController.getXPSAccess().getPageAccess(0);
				
					//add a futuretask for searching of each page, in order of search direction
					ArrayList<SearchFutureTask> searchTasks = new ArrayList<SearchFutureTask>();
					if(direction == SearchDirection.FORWARD){
						for(int i = fPageController.getPageNum() + 1; i < pageAccess.getLastPageNum(); i++){
							searchTasks.add(new SearchFutureTask(new SearchCallable(this, searchString, i), searchString, i));
							
						}
					} else {
						for(int i = fPageController.getPageNum() - 1; i >= 0; i--){
							searchTasks.add(new SearchFutureTask(new SearchCallable(this, searchString, i), searchString, i));
						}				
					}
					
					//submit tasks to executor, kicking off the search threads
					for (SearchFutureTask searchFutureTask : searchTasks) {
						fExecutorService.submit(searchFutureTask);	
					}
					
		
		
					for (SearchFutureTask futureTask : searchTasks) {
						if(fExecutorService.isShutdown()){
							break;
						}
						try {
							//shouldn't ever need to wait this long for a result.
							if(futureTask.get(5, TimeUnit.SECONDS)){
								//found a match. shutdown the executor service, no need for the threads to continue
								//found a match.
								fExecutorService.shutdownNow();
								fPageController.setPage(futureTask.getPageNum());
								foundMatch = true;
								break;
							}
						} catch (InterruptedException e) {
							//Someone wants us to stop seaching..
						} catch (ExecutionException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (TimeoutException e) {
							//Something's taking too long... get out of the loop
						}
					}
		
		
				} catch (XPSSpecError e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (XPSError e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} finally {
				fExecutorService = null;
				fSearchInitiatorThread = null;
				controller.fireSearchEnded(searchString, foundMatch);
			}
		}
		

		return foundMatch;
	}

	boolean searchPage(String searchString, int i) throws XPSError {
		IDocumentReference docRef = fPageController.getXPSAccess().getFileAccess().getFixedDocumentSequence().getDocumentReference().get(0);	
		IXPSPageAccess pageAccess = fPageController.getXPSAccess().getPageAccess(0);
		IXPSIterator pageIterator = fPageController.getXPSAccess().getPageIterator(pageAccess.getPage(i), docRef);
		StringSearchXPSVisitor v = new StringSearchXPSVisitor(searchString);
		pageIterator.accept(v);
		return v.foundString();
	}

	public void findPanelClosed() {
		terminateExistingSearch();
	}

	private void terminateExistingSearch() {
		if(fExecutorService != null){
			fExecutorService.shutdownNow();
			//fExecutorService != null -> fSearchInitiatorThread !=  null
			fSearchInitiatorThread.interrupt();
		}
	}

}
