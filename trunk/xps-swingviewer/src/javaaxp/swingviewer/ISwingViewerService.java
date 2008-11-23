package javaaxp.swingviewer;

import java.io.File;

import javaaxp.core.service.XPSError;

public interface ISwingViewerService {
	public IXPSPageViewer createPageViewer(PageController controller) throws XPSError;
	public PageController createPageController(File f) throws XPSError;
}
