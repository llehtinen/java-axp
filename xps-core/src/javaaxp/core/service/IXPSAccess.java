package javaaxp.core.service;

import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IVisualBrush;



public interface IXPSAccess {
	public IXPSFileAccess getFileAccess();
	public IXPSDocumentAccess getDocumentAccess();
	public IXPSPageAccess getPageAccess(int docNum) throws XPSError;
	public IXPSIterator getPageIterator(IFixedPage page, IDocumentReference docRef) throws XPSError;
	public IXPSIterator getVisualElementIterator(IVisualBrush visualBrush) throws XPSError;
}
