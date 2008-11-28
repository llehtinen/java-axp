package javaaxp.swingviewer;

import javax.swing.JFrame;

public class SwingViewerContext {
	private JFrame fUI;
	private  PageController fCurrentDocumentPageController;
	private IXPSPageViewer fPageViewer;
	public SwingViewerContext(PageController currentDocumentPageController, IXPSPageViewer viewer, JFrame ui) {
		super();
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
