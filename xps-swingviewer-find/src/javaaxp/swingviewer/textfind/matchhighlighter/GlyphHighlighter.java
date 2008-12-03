/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
package javaaxp.swingviewer.textfind.matchhighlighter;

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

	private String fSearchString;

	public GlyphHighlighter(String searchString) {
		fSearchString = searchString;
	}

	@Override
	public void renderedCanvas(ICanvas canvas, Graphics2D g2) {
		// TODO Auto-generated method stub

	}

	@Override
	public void renderedGlyphs(IGlyphs glyphs, Graphics2D g2) {
		if(glyphs.getUnicodeString().contains(fSearchString)){
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