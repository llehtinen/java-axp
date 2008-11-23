package javaaxp.core.service;

import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IVisualBrush;



public interface IXPSAccess {
	public IXPSFileAccess getFileAccess();
	public IXPSDocumentAccess getDocumentAccess(IXPSAccess fileAccess);
	public IXPSPageAccess getPageAccess(IXPSAccess xpsfile, int docNum) throws XPSError;
	public IXPSIterator getPageIterator(IFixedPage page, IXPSAccess access, IDocumentReference docRef) throws XPSError;
	public IXPSIterator getVisualElementIterator(IVisualBrush visualBrush) throws XPSError;
}
