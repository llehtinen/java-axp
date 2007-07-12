package xps.api;

import xps.api.model.document.page.IFixedPage;



public interface IXPSPageAccess {
	public int getFirstPageNum();
	public int getLastPageNum();
	public XPSElementIterator getElementIterator(int pageNum) throws XPSSpecError, XPSError;
	public int getPageNumberWithLinkTarget(String outlineTarget) throws XPSError; 
	public IFixedPage getPage(int pageNum) throws XPSSpecError, XPSError;
	
}
