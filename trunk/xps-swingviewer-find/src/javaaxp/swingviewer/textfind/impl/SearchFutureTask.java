/**
 * 
 */
package javaaxp.swingviewer.textfind.impl;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

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