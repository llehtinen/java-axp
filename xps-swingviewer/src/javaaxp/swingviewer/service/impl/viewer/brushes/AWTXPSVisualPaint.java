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

import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.IVisualBrush;
import javaaxp.swingviewer.service.impl.rendering.FontLoader;
import javaaxp.swingviewer.service.impl.rendering.ImageLoader;

public class AWTXPSVisualPaint extends AWTXPSPaint {

	private Rectangle2D fLocationOfFirstTileToRender;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private AffineTransform fBrushTransform;
	private IVisualBrush fVisualBrush;
	private IXPSAccess fXPSAccess;

	public AWTXPSVisualPaint(Rectangle2D locationOfFirstTileToRender, IVisualBrush brush, FontLoader fontLoader, ImageLoader imageLoader, AffineTransform at, IXPSAccess xpsAccess) {
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fBrushTransform = at;
		fVisualBrush = brush;
		fXPSAccess = xpsAccess;
	}

	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError {
		return new AWTXPSVisualPaintContext(cm,opacityPaintContext,xform,fVisualBrush, fFontLoader, fImageLoader, fLocationOfFirstTileToRender,fBrushTransform, userBounds, fXPSAccess);
	}

}
