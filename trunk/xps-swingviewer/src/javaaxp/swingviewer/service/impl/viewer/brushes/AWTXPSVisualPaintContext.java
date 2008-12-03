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

package javaaxp.swingviewer.service.impl.viewer.brushes;

import java.awt.Graphics2D;
import java.awt.PaintContext;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;
import java.util.Vector;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.IVisualBrush;
import javaaxp.swingviewer.IXPSRenderingExtension;
import javaaxp.swingviewer.service.impl.rendering.AWTXPSRenderer;
import javaaxp.swingviewer.service.impl.rendering.FontLoader;
import javaaxp.swingviewer.service.impl.rendering.ImageLoader;

public class AWTXPSVisualPaintContext extends AWTXPSTilingPaintContext {

	private IVisualBrush fVisualBrush;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private IXPSAccess fXPSAccess;
	public AWTXPSVisualPaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			IVisualBrush visualBrush, FontLoader fontLoader, ImageLoader imageLoader,
			Rectangle2D locationOfFirstTileToRender, AffineTransform brushTransform, Rectangle2D userBounds, IXPSAccess access) throws XPSError {
		super(cm, opacityPaintContext, xform, brushTransform, userBounds, visualBrush.getViewport(), visualBrush.getViewbox(), visualBrush.getTileMode());
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fVisualBrush = visualBrush;
		fXPSAccess = access;
	}
	
	@Override
	protected void renderSingleTile(Graphics2D singleTileGraphics) {
		try {
			AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(fFontLoader, fImageLoader, singleTileGraphics, fXPSAccess, new Vector<IXPSRenderingExtension>());
			IXPSIterator iterator = fXPSAccess.getVisualElementIterator(fVisualBrush);
			iterator.accept(visualBrushRenderer);
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
