package xps.api;

import xps.model.document.IDocumentStructure;
import xps.model.document.page.IFixedPage;

public interface IXPSDocumentAccess {
	public IDocumentStructure getDocument();
	public IFixedPage getPage(int i);
	public int getFirstPageIndex();
	public int getLastPageIndex();
}
