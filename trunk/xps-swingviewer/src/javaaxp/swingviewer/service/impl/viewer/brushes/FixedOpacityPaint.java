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

import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;
import java.awt.image.DataBuffer;
import java.awt.image.Raster;
import java.awt.image.WritableRaster;

public class FixedOpacityPaint implements Paint {

	private double fOpacity;

	public FixedOpacityPaint(double opacity) {
		fOpacity = opacity;
	}

	public PaintContext createContext(final ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints) {
		// TODO Auto-generated method stub
		return new PaintContext() {
		
			public Raster getRaster(int x, int y, int w, int h) {
				WritableRaster wr = WritableRaster.createBandedRaster(DataBuffer.TYPE_INT, w, h, 4, null);
				for(int i = 0; i < w; i++){
					for(int j = 0; j < h; j++){
						wr.setSample(i, j, 3, fOpacity);
					}
				}
				return wr;
			}
		
			public ColorModel getColorModel() {
				// TODO Auto-generated method stub
				return cm;
			}
		
			public void dispose() {
			}
		
		};
	}

	public int getTransparency() {
		// TODO Auto-generated method stub
		return 0;
	}

}
