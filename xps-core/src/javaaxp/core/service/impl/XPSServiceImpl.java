package javaaxp.core.service.impl;

import java.io.File;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSService;
import javaaxp.core.service.XPSError;

public class XPSServiceImpl implements IXPSService {
	@Override
	public IXPSAccess getXPSAccess(File f) throws XPSError {
		return new XPSFileAccessImpl(f);
	}

}
