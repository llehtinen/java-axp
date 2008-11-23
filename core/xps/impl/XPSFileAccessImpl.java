package xps.impl;

import java.io.File;

import xps.api.IXPSAccess;
import xps.api.IXPSDocumentAccess;
import xps.api.IXPSFileAccess;
import xps.api.IXPSPageAccess;
import xps.api.XPSError;
import xps.impl.zipfileaccess.XPSZipFileAccess;

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
}
