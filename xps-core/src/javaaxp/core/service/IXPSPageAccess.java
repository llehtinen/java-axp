package javaaxp.core.service;

import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.IFixedPage;



public interface IXPSPageAccess {
	public int getFirstPageNum();
	public int getLastPageNum();
	public int getPageNumberWithLinkTarget(String outlineTarget) throws XPSError; 
	public IFixedPage getPage(int pageNum) throws XPSSpecError, XPSError;
	public IDocumentReference getDocumentReference();
	
}
