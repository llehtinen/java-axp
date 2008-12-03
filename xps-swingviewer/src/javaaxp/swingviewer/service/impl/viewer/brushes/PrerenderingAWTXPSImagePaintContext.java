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
import java.awt.Shape;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

public class PrerenderingAWTXPSImagePaintContext extends AWTXPSImagePaintContext {

	private Raster mTileRaster;
	private int mTileX;
	private int mTileY;
	private int mTileWidth;
	private int mTileHeight;

	public PrerenderingAWTXPSImagePaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			BufferedImage sourceImage, Rectangle2D locationOfFirstTileToRender, AffineTransform imageBrushTransform) {
		super(cm, opacityPaintContext, xform, sourceImage, locationOfFirstTileToRender, imageBrushTransform);
		//calculate the width/height in device space
		AffineTransform totalTransform = calculateTotalTransform(AffineTransform.getTranslateInstance(0, 0));
		Shape s = totalTransform.createTransformedShape(fLocationOfFirstTileToRender);
		
		//should be the bounds 
		Rectangle2D imageBounds = s.getBounds2D();
		int x = (int)Math.floor(imageBounds.getX());
		int y = (int)Math.floor(imageBounds.getY());
		int height = (int)Math.ceil(imageBounds.getHeight() + 1);
		int width = (int)Math.ceil(imageBounds.getWidth() + 1);
		setTile(super.getSourceRaster(x, y, width, height), x, y, width, height);
	}
	
	@Override
	protected Raster getSourceRaster(int x, int y, int w, int h) {
		if(containedInCachedTile(x,y,w,h)){
			return getRasterFromTile(x,y,w,h);
		}
		return super.getSourceRaster(x, y, w, h);
	}
	
	private void setTile(Raster newTile, int x, int y, int w, int j) {
		mTileRaster = newTile;
		mTileX = x;
		mTileY = y;
		mTileWidth = w;
		mTileHeight = j;
	}

	private Raster getRasterFromTile(int x, int y, int w, int h) {
		return mTileRaster.createChild(x - mTileX, y - mTileY, w, h, x - mTileX, y - mTileY, null);
	}

	private boolean containedInCachedTile(int x, int y, int w, int h) {
		return mTileRaster != null && (   
				mTileX <= x && x <= mTileX + mTileWidth
				&& mTileX <= x + w && x + w <= mTileX + mTileWidth
				&& mTileY <= y && y <= mTileY + mTileHeight
				&& mTileY <= y + h && y + h <= mTileY + mTileHeight );
	}

}
