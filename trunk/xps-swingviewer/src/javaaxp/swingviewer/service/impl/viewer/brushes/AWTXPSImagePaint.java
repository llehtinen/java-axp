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
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.IImageBrush;
import javaaxp.core.service.model.document.page.STTileMode;
import javaaxp.swingviewer.service.impl.rendering.AWTXPSRenderingUtils;

public class AWTXPSImagePaint extends AWTXPSPaint {

	private BufferedImage fSourceImage;
	private AffineTransform fImageBrushTransform;
	private IImageBrush fImageBrush;

	public AWTXPSImagePaint(BufferedImage sourceImage, IImageBrush brush, AffineTransform imageBrushTransform){
		fSourceImage = sourceImage;
		fImageBrush = brush;
		fImageBrushTransform = imageBrushTransform;
	}
	
	@Override
	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError {
		if((fImageBrush.getTileMode() == null || fImageBrush.getTileMode() == STTileMode.NONE) && fSourceImage.getWidth() * fSourceImage.getHeight() > (256 * 256)){
			//more memory intensive, but faster for large images
			return new PrerenderingAWTXPSImagePaintContext(cm,opacityPaintContext,xform,fSourceImage, AWTXPSRenderingUtils.createRectangle(fImageBrush.getViewport()), fImageBrushTransform);			
		}
		return new AWTXPSTilingImagePaintContext(cm,opacityPaintContext,xform,fImageBrushTransform,userBounds,fImageBrush.getViewport(),fImageBrush.getViewbox(), fImageBrush.getTileMode(), fSourceImage);
	}

}