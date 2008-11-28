/**
 * 
 */
package javaaxp.swingviewer.textfind;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;

import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPath;
import javaaxp.swingviewer.IXPSRenderingExtension;

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
			//first, highlight the whole string. Then ,get fancy and just highlight the searched-for string
			//also, should be using the glyphmetrics provided by indices property (need to make that util public)
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