package xps.impl;

import xps.api.IXPSAccess;
import xps.api.IXPSDocumentAccess;
import xps.api.IXPSFileAccess;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.IDocumentStructure;

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
