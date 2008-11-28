package javaaxp.swingviewer;

import java.awt.Graphics2D;

import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPath;

public interface IXPSRenderingExtension {
	void renderedPage(IFixedPage page, Graphics2D g2);
	void renderedCanvas(ICanvas canvas, Graphics2D g2);
	void renderedGlyphs(IGlyphs glyphs, Graphics2D g2);
	void renderedPath(IPath path, Graphics2D g2s);
}
