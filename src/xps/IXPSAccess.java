package xps;

import java.io.File;


public interface IXPSAccess {
	public IXPSFileAccess getFileAccess(File xpsFile);
	public IXPSDocumentAccess getDocumentAccess(IXPSFileAccess fileAccess);
	public IXPSPageAccess getPageAccess(IXPSFileAccess xpsfile, IXPSDocumentAccess xpsdocument);
}
