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
import java.util.Vector;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.STTileMode;
import javaaxp.swingviewer.service.impl.rendering.AWTXPSRenderingUtils;

public abstract class AWTXPSTilingPaintContext extends AWTXPSPaintContext {

	private AffineTransform fUserToDeviceTransform;
	private AffineTransform fCurrentTransform;
	private Rectangle2D fUserBounds;
	private STTileMode fTileMode;
	private Rectangle2D fViewportRect;
	private Rectangle2D fViewboxRect;

	public AWTXPSTilingPaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			AffineTransform brushTransform, Rectangle2D userBounds, String viewPortRectangle, String viewBoxRectangle, STTileMode tileMode) throws XPSError {
		
		super(cm, opacityPaintContext);
		
		fUserToDeviceTransform = xform;
		fCurrentTransform = brushTransform;
		fUserBounds = userBounds;
		fTileMode = tileMode;
		
		fViewportRect = AWTXPSRenderingUtils.createRectangle(viewPortRectangle);
		fViewboxRect = AWTXPSRenderingUtils.createRectangle(viewBoxRectangle);
	}

	protected Raster getSourceRaster(int x, int y, int w, int h) {
		BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = (Graphics2D)bi.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g2.setClip(0, 0, w, h);
		AffineTransform totalTransform = calculateTotalTransform(AffineTransform.getTranslateInstance(-x, -y));
		g2.setTransform(totalTransform);
		try {
			if(fTileMode != null && fTileMode != STTileMode.NONE){
				TileInfo tilePoints[] = getTilePoints();
				for (TileInfo info : tilePoints) {
					Graphics2D singleTileGraphics = (Graphics2D)g2.create();
					boolean flipX = (fTileMode == STTileMode.FLIP_X || fTileMode == STTileMode.FLIP_XY)  &&  !info.fXEvenRepitition;
					boolean flipY = (fTileMode == STTileMode.FLIP_Y || fTileMode == STTileMode.FLIP_XY) &&  !info.fYEvenRepitition;
					renderSingleTile(singleTileGraphics, info.fTileOrigin, flipX, flipY);
				}
			} else {
				renderSingleTile(g2, fViewportRect, false, false);
			}
		} catch (XPSError e) {
			//Not  much to do here.
		}
		
		return bi.getRaster();
	}

	private void renderSingleTile(Graphics2D singleTileGraphics, Rectangle2D tileBounds, boolean flipX, boolean flipY) throws XPSError {
		singleTileGraphics.translate(tileBounds.getX(), tileBounds.getY());
		
		if(flipX){
			AffineTransform flipXTransform = AffineTransform.getScaleInstance(-1, 1);
			flipXTransform.concatenate(AffineTransform.getTranslateInstance(-tileBounds.getWidth(), 0));
			singleTileGraphics.transform(flipXTransform);
		} 
		
		if(flipY){
			AffineTransform flipYTransform = AffineTransform.getScaleInstance(1, -1);
			flipYTransform.concatenate(AffineTransform.getTranslateInstance(0,-tileBounds.getHeight()));
			singleTileGraphics.transform(flipYTransform);
		} 

		applyViewboxScaleAndTranslation(singleTileGraphics);
		
		renderSingleTile(singleTileGraphics);
	}

	protected abstract void renderSingleTile(Graphics2D singleTileGraphics);

	private TileInfo[] getTilePoints() {
		Vector<TileInfo> tilePoints = new Vector<TileInfo>();
		//find the first X and Y coordinates in page coordinate space that will show a portion of the tile to be shown
		
		double startingX = fViewportRect.getX();
		double startingY = fViewportRect.getY();
		boolean evenX = true;
		boolean evenY = true;
		
		//find first x. 
		while(startingX + fViewportRect.getWidth() > fUserBounds.getX()){
			startingX -= fViewportRect.getWidth();
			evenX = !evenX;
		}
		
		while(startingY + fViewportRect.getHeight() > fUserBounds.getY()){
			startingY -= fViewportRect.getHeight();
			evenY = !evenY;
		}

		double y = startingY;
		while(y < fUserBounds.getMaxY()){
			double x = startingX;	
			while(x < fUserBounds.getMaxX() ){
				Rectangle2D tileBounds = new Rectangle2D.Double(x,y, fViewportRect.getWidth(), fViewportRect.getHeight());
				tilePoints.add(new TileInfo(tileBounds, evenX, evenY));
				x += fViewportRect.getWidth();
				evenX = !evenX;
			}
			y += fViewportRect.getHeight();
			evenY = ! evenY;
		}
		
		
		return (TileInfo[]) tilePoints.toArray(new TileInfo[tilePoints.size()]);
		
	}

	private void applyViewboxScaleAndTranslation(Graphics2D g2) throws XPSError {
		//take into account the scaling for viewbox -> viewport

		double xScale = fViewportRect.getWidth() / fViewboxRect.getWidth();
		double yScale = fViewportRect.getHeight() / fViewboxRect.getHeight();
		
		g2.transform(AffineTransform.getScaleInstance(xScale, yScale));
	}

	protected AffineTransform calculateTotalTransform(AffineTransform base) {
		AffineTransform total = new AffineTransform(base);
		total.concatenate(fUserToDeviceTransform);
		total.concatenate(fCurrentTransform);
		return total;
	}
	
	protected static class TileInfo {
		public final Rectangle2D fTileOrigin;
		public final boolean fXEvenRepitition;
		public final boolean fYEvenRepitition;
		
		public TileInfo(Rectangle2D tileOrigin, boolean evenXRepitition, boolean evenYRepitition) {
			super();
			fTileOrigin = tileOrigin;
			fXEvenRepitition = evenXRepitition;
			fYEvenRepitition = evenYRepitition;
		}
		
	}

}
