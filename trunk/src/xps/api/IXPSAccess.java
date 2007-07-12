package xps.api;



public interface IXPSAccess {
	public IXPSFileAccess getFileAccess();
	public IXPSDocumentAccess getDocumentAccess(IXPSAccess fileAccess);
	public IXPSPageAccess getPageAccess(IXPSAccess xpsfile, int docNum) throws XPSError;
}
