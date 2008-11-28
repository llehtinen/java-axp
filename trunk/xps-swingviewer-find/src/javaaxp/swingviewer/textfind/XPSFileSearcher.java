package javaaxp.swingviewer.textfind;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;

import javax.swing.SwingUtilities;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPath;
import javaaxp.swingviewer.IXPSPageRenderer;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.IXPSRenderingExtension;
import javaaxp.swingviewer.PageController;

public class XPSFileSearcher {

	public class GlyphHighlighter implements IXPSRenderingExtension {

		private String fSearchStirng;

		public GlyphHighlighter(String searchString) {
			fSearchStirng = searchString;
		}

		@Override
		public void renderedCanvas(ICanvas canvas, Graphics2D g2) {
			// TODO Auto-generated method stub

		}

		@Override
		public void renderedGlyphs(IGlyphs glyphs, Graphics2D g2) {
			if(glyphs.getUnicodeString().contains(fSearchStirng)){
				//graphics is at the origin.
				//first, highlight the whole string
				Rectangle2D rect = g2.getFontMetrics().getStringBounds(glyphs.getUnicodeString(), g2);
				g2.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.25f));
				g2.setColor(Color.YELLOW);
				g2.fill(rect);
				
			}

		}

		@Override
		public void renderedPage(IFixedPage page, Graphics2D g2) {
			// TODO Auto-generated method stub

		}

		@Override
		public void renderedPath(IPath path, Graphics2D g2s) {
			// TODO Auto-generated method stub

		}

	}

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
