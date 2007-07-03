package xps.model.fileaccess;

import xps.XPSError;
import xps.model.document.IDocumentReference;
import xps.model.document.IFixedDocument;
import xps.model.document.IFixedDocumentSequence;
import xps.model.document.page.IFixedPage;
import xps.model.document.page.IPageContent;

public interface IXPSFileAccess {
	public IFixedDocumentSequence getFixedDocumentSequence() throws XPSError;
	public IFixedDocument getFixedDocument(IDocumentReference ref) throws XPSError;
	public IFixedPage getFixedPage(IDocumentReference ref, IPageContent page) throws XPSError;

}
