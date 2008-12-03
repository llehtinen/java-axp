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
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.STTileMode;

public class AWTXPSTilingImagePaintContext extends AWTXPSTilingPaintContext {

	private BufferedImage fSourceImage;

	public AWTXPSTilingImagePaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			AffineTransform brushTransform, Rectangle2D userBounds, String viewPortRectangle,
			String viewBoxRectangle, STTileMode tileMode, BufferedImage sourceImage) throws XPSError {
		super(cm, opacityPaintContext, xform, brushTransform, userBounds, viewPortRectangle, viewBoxRectangle,
				tileMode);
		fSourceImage = sourceImage;
	}

	protected void renderSingleTile(Graphics2D singleTileGraphics) {
		singleTileGraphics.drawImage(fSourceImage, 0,0,null);
	}

}
