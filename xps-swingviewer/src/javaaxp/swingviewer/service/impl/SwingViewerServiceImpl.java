package javaaxp.swingviewer.service.impl;

import java.io.File;

import javaaxp.core.service.IXPSService;
import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;

public class SwingViewerServiceImpl implements ISwingViewerService {

	private IXPSService fXPSAccess;

	public SwingViewerServiceImpl(IXPSService xpsAccessService) {
		fXPSAccess = xpsAccessService;
	}
	
	@Override
	public IXPSPageViewer createPageViewer(PageController controller) throws XPSError {
		XPSPageViewer viewer =  new XPSPageViewer(controller);
		return viewer;
	}

	@Override
	public PageController createPageController(File f) throws XPSError {
		return new PageController(fXPSAccess.getXPSAccess(f));	
	}

}
