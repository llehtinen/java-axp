package javaaxp.core.service.impl;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSDocumentAccess;
import javaaxp.core.service.IXPSFileAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentStructure;

public class XPSDocumentAccessImpl implements IXPSDocumentAccess {

	private IXPSFileAccess fFileAccess;

	public XPSDocumentAccessImpl(IXPSAccess fileAccess) {
		fFileAccess = fileAccess.getFileAccess();
	}

	public IDocumentStructure getDocumentStructure(int docNum) throws XPSSpecError, XPSError {
		return fFileAccess.loadDocumentStructure(docNum);
	}

	public int getFirstDocNum() throws XPSError {
		return 0;
	}

	public int getLastDocNum() throws XPSError {
		return fFileAccess.getFixedDocumentSequence().getDocumentReference().size() - 1;
	}
}
