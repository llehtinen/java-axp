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
import java.awt.image.ColorModel;
import java.awt.image.Raster;
import java.awt.image.WritableRaster;

public abstract class AWTXPSPaintContext implements PaintContext {

	private ColorModel fColourModel;
	private PaintContext fOpacityMaskPaintContext;

	public AWTXPSPaintContext(ColorModel cm, PaintContext opacityPaintContext) {
		fColourModel  = cm;
		fOpacityMaskPaintContext = opacityPaintContext;
	}

	public void dispose() {
		if(fOpacityMaskPaintContext != null){
			fOpacityMaskPaintContext.dispose();
		}
	}

	public ColorModel getColorModel() {
		return fColourModel;
	}

	public Raster getRaster(int x, int y, int w, int h) {
		Raster sourceRaster = getSourceRaster(x,y,w,h);
		if(fOpacityMaskPaintContext != null){
			WritableRaster wr = sourceRaster.createCompatibleWritableRaster();
			wr.setDataElements(0, 0, sourceRaster);

			Raster r = fOpacityMaskPaintContext.getRaster(x, y, w, h);
			//copy the alpha values
			for(int i = 0; i < w; i++){
				for(int j = 0; j < h; j++){
					wr.setSample(i, j, 3, r.getSample(i, j, 3));
				}
			}
			return wr;
		} else {
			return sourceRaster;
		}
		

	}

	protected abstract Raster getSourceRaster(int x, int y, int w, int h);

}
