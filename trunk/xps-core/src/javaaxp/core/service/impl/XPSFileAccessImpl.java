package javaaxp.core.service.impl;

import java.io.File;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSDocumentAccess;
import javaaxp.core.service.IXPSFileAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.impl.fileaccess.XPSZipFileAccess;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IVisualBrush;

public class XPSFileAccessImpl implements IXPSAccess {

	IXPSFileAccess fFileAccess;

	public XPSFileAccessImpl(File file) throws XPSError {
		super();
		fFileAccess = new XPSZipFileAccess(file);
	}

	public IXPSDocumentAccess getDocumentAccess(IXPSAccess fileAccess) {
		return new XPSDocumentAccessImpl(fileAccess);
	}

	public IXPSFileAccess getFileAccess()  {
		return fFileAccess;
	}

	public IXPSPageAccess getPageAccess(IXPSAccess xpsAccess, int docNum) throws XPSError {
		return new XPSPageAccessImpl(xpsAccess, docNum);
	}

	@Override
	public IXPSIterator getPageIterator(IFixedPage page, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		return new XPSPageElementIterator(page, access, docRef);
	}

	@Override
	public IXPSIterator getVisualElementIterator(IVisualBrush visualBrush) throws XPSError {
		return new XPSVisualElementIterator(visualBrush);
	}
}
