package xps.impl.ui;

import java.awt.Graphics2D;

import xps.XPSError;
import xps.impl.ui.rendering.FontLoader;
import xps.impl.ui.rendering.ImageLoader;
import xps.impl.ui.rendering.SwingXPSRenderer;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;
import xps.model.document.page.IFixedPage;
import xps.model.document.page.visitor.XPSElementIterator;

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
