package javaaxp.swingviewer;

import javax.swing.JFrame;

public class SwingViewerContext {
	private JFrame fUI;
	private  PageController fCurrentDocumentPageController;
	private IXPSPageViewer fPageViewer;
	private ISwingViewerService fSwingViewerService;
	public ISwingViewerService getSwingViewerService() {
		return fSwingViewerService;
	}

	public SwingViewerContext(ISwingViewerService swingViewerService, PageController currentDocumentPageController, IXPSPageViewer viewer, JFrame ui) {
		super();
		fSwingViewerService = swingViewerService;
		fCurrentDocumentPageController = currentDocumentPageController;
		fUI = ui;
		fPageViewer = viewer;
	}
	
	public JFrame getUI() {
		return fUI;
	}
	public PageController getCurrentDocumentPageController() {
		return fCurrentDocumentPageController;
	}

	public IXPSPageViewer getPageViewer() {
		return fPageViewer;
	}
	
}
