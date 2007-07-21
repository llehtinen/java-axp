package viewer;

import java.awt.Graphics2D;

import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import viewer.rendering.AWTXPSRenderer;
import xps.api.IXPSAccess;
import xps.api.XPSError;
import xps.api.model.document.IDocumentReference;
import xps.api.model.document.page.IFixedPage;
import xps.impl.XPSElementIterator;
import xps.impl.XPSPageElementIterator;

public class XPSPageRenderer {
	
	private IDocumentReference fDocument;
	private IXPSAccess fXPSAccess;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private XPSElementIterator fPageIterator;

	public XPSPageRenderer(IXPSAccess access, IDocumentReference document) {
		fDocument = document;
		fXPSAccess = access;
		fFontLoader = new FontLoader(document, access);
		fImageLoader = new ImageLoader(document, access);
	}
	
	public void setPage(IFixedPage page) throws XPSError{
		fPageIterator = new XPSPageElementIterator(page,fXPSAccess,fDocument);
	}
	
	public void paint(Graphics2D g) throws XPSError{
		AWTXPSRenderer renderer = new AWTXPSRenderer(fFontLoader, fImageLoader, (Graphics2D)g);
		fPageIterator.accept(renderer);
	}

}
