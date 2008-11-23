package javaaxp.swingviewer.service.impl;

import java.awt.Graphics2D;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.swingviewer.service.impl.rendering.AWTXPSRenderer;
import javaaxp.swingviewer.service.impl.rendering.FontLoader;
import javaaxp.swingviewer.service.impl.rendering.ImageLoader;

public class XPSPageRenderer {
	
	private IDocumentReference fDocument;
	private IXPSAccess fXPSAccess;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private IXPSIterator fPageIterator;

	public XPSPageRenderer(IXPSAccess access, IDocumentReference document) {
		fDocument = document;
		fXPSAccess = access;
		fFontLoader = new FontLoader(document, access.getFileAccess());
		fImageLoader = new ImageLoader(document, access.getFileAccess());
	}
	
	public void setPage(IFixedPage page) throws XPSError{
		fPageIterator = fXPSAccess.getPageIterator(page,fXPSAccess,fDocument);
	}
	
	public void paint(Graphics2D g) throws XPSError{
		AWTXPSRenderer renderer = new AWTXPSRenderer(fFontLoader, fImageLoader, (Graphics2D)g, fXPSAccess);
		fPageIterator.accept(renderer);
	}

}
