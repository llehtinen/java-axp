package xps.api;



public interface IXPSPageAccess {
	public int getFirstPageNum();
	public int getLastPageNum();
	public XPSElementIterator getElementIterator(int pageNum); 
	
}
