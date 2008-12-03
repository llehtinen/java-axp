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
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

public class AWTXPSImagePaintContext extends AWTXPSPaintContext {

	protected AffineTransform fUserToDeviceTransform;
	protected AffineTransform fCurrentTransform;
	protected Rectangle2D fLocationOfFirstTileToRender;
	protected BufferedImage fSourceImage;

	public AWTXPSImagePaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform, BufferedImage sourceImage, Rectangle2D locationOfFirstTileToRender, AffineTransform imageBrushTransform) {
		super(cm, opacityPaintContext);
		fUserToDeviceTransform = xform;
		fSourceImage = sourceImage;
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fCurrentTransform = imageBrushTransform;
	}



	@Override
	protected Raster getSourceRaster(int x, int y, int w, int h) {
		//TODO: Handle tiling!
		
		BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = (Graphics2D)bi.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g2.setClip(0, 0, w, h);
		AffineTransform totalTransform = calculateTotalTransform(AffineTransform.getTranslateInstance(-x, -y));
		g2.setTransform(totalTransform);
		g2.drawImage(fSourceImage,(int)fLocationOfFirstTileToRender.getX(), (int)fLocationOfFirstTileToRender.getY(),
				(int)fLocationOfFirstTileToRender.getWidth(), (int)fLocationOfFirstTileToRender.getHeight(),null);
		return bi.getRaster();
	}

	protected AffineTransform calculateTotalTransform(AffineTransform base) {
		AffineTransform total = new AffineTransform(base);
		total.concatenate(fUserToDeviceTransform);
		total.concatenate(fCurrentTransform);
		return total;
	}

}
