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
