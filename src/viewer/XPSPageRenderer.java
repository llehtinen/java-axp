package viewer;

import java.awt.Graphics2D;

import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import viewer.rendering.SwingXPSRenderer;
import xps.XPSError;
import xps.impl.page.XPSElementIterator;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;
import xps.model.document.page.IFixedPage;

public class XPSPageRenderer {
	
	private IDocumentReference fDocument;
	private XPSZipFileAccess fXPSAccess;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private XPSElementIterator fPageIterator;

	public XPSPageRenderer(XPSZipFileAccess access, IDocumentReference document) {
		fDocument = document;
		fXPSAccess = access;
		fFontLoader = new FontLoader(document, access);
		fImageLoader = new ImageLoader(document, access);

	}
	
	public void setPage(IFixedPage page) throws XPSError{
		fPageIterator = new XPSElementIterator(page,fXPSAccess,fDocument);
	}
	
	public void paint(Graphics2D g) throws XPSError{
		SwingXPSRenderer renderer = new SwingXPSRenderer(fFontLoader, fImageLoader, (Graphics2D)g);
		fPageIterator.accept(renderer);
	}

}
