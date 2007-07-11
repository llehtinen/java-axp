package xps.impl;

import java.io.File;

import xps.api.IXPSAccess;
import xps.api.IXPSDocumentAccess;
import xps.api.IXPSFileAccess;
import xps.api.IXPSPageAccess;
import xps.api.XPSError;
import xps.impl.zipfileaccess.XPSZipFileAccess;

public class XPSFileAccessImpl implements IXPSAccess {

	public IXPSDocumentAccess getDocumentAccess(IXPSFileAccess fileAccess) {
		return new XPSDocumentAccessImpl(fileAccess);
	}

	public IXPSFileAccess getFileAccess(File xpsFile) throws XPSError {
		return new XPSZipFileAccess(xpsFile);
	}

	public IXPSPageAccess getPageAccess(IXPSFileAccess xpsfile, IXPSDocumentAccess xpsdocument) {
		return new XPSPageAccessImpl(xpsfile, xpsdocument);
	}



}
