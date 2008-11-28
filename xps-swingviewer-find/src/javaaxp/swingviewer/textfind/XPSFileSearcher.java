package javaaxp.swingviewer.textfind;


import javax.swing.SwingUtilities;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.swingviewer.IXPSPageRenderer;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;

public class XPSFileSearcher {

	private PageController fPageController;
	private IXPSPageViewer fCurrentViewer;

	public XPSFileSearcher(PageController currentDocumentPageController, IXPSPageViewer currentViewer) {
		fPageController = currentDocumentPageController;
		fCurrentViewer = currentViewer;
	}

	public void search(String searchString) {
		//examine each page for a glyphs element that contains the search string. If page is after current page, jump to it.
		try {

			IDocumentReference docRef = fPageController.getXPSAccess().getFileAccess().getFixedDocumentSequence().getDocumentReference().get(0);	
			IXPSPageAccess pageAccess = fPageController.getXPSAccess().getPageAccess(fPageController.getXPSAccess(), 0);
			for(int i = fPageController.getPageNum(); i < pageAccess.getLastPageNum(); i++){
				IXPSIterator pageIterator = fPageController.getXPSAccess().getPageIterator(pageAccess.getPage(i), fPageController.getXPSAccess(), docRef);
				StringSearchXPSVisitor v = new StringSearchXPSVisitor(searchString);
				pageIterator.accept(v);
				if(v.foundString()){
					setupHighlightRenderer(searchString);
					fPageController.setPage(i);
					break;
				}
			}
		} catch (XPSSpecError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void setupHighlightRenderer(String searchString) {
		final GlyphHighlighter glyphHighlighter = new GlyphHighlighter(searchString);
		fCurrentViewer.getPageRenderer().addRenderingExtension(glyphHighlighter);
		
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(5000);
				} catch (InterruptedException e) {}
				
				fCurrentViewer.getPageRenderer().removeRenderingExtension(glyphHighlighter);
				SwingUtilities.invokeLater(new Runnable() {
					@Override
					public void run() {
						fCurrentViewer.getPageRenderer().getRendererComponent().repaint();
					}
				});
			}
		}).start();
	}
	
	

}
