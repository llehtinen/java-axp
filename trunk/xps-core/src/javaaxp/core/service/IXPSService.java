package javaaxp.core.service;

import java.io.File;

public interface IXPSService {
	public IXPSAccess getXPSAccess(File xpsFile) throws XPSError;
}
