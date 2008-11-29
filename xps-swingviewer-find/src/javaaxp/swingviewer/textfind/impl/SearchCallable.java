/**
 * 
 */
package javaaxp.swingviewer.textfind.impl;

import java.util.concurrent.Callable;

public class SearchCallable implements Callable<Boolean> {
	/**
	 * 
	 */
	private final XPSFileSearcher fFileSearcher;
	private int fPageNum;
	private String fSearchString;

	public SearchCallable(XPSFileSearcher fileSearcher, String searchString, int i) {
		fFileSearcher = fileSearcher;
		fPageNum = i;
		fSearchString = searchString;
	}

	@Override
	public Boolean call() throws Exception {
		return fFileSearcher.searchPage(fSearchString, fPageNum);
	}
}