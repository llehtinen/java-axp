/**
 * 
 */
package xps.impl.ui.rendering;

import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;
import java.awt.image.WritableRaster;

class ImagePaint implements Paint {
	private final class ImagePaintContext implements PaintContext {
		private final AffineTransform xform;

		private final ColorModel cm;

		private PaintContext opacityPaintContext;

		private ImagePaintContext(AffineTransform xform, ColorModel cm, PaintContext opacityPaintContext) {
			this.xform = xform;
			this.cm = cm;
			this.opacityPaintContext = opacityPaintContext;
		}

		public Raster getRaster(int x, int y, int w, int h) {
			
			BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
			Graphics2D g2 = (Graphics2D)bi.createGraphics();
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g2.setClip(0, 0, w, h);
			AffineTransform base = AffineTransform.getTranslateInstance(-x, -y);
			AffineTransform total = new AffineTransform(base);
			total.concatenate(xform);
			total.concatenate(at);
			g2.setTransform(total);
			g2.drawImage(sourceImage,(int)locationOfFirstTileToRender.getX(), (int)locationOfFirstTileToRender.getY(),
					(int)locationOfFirstTileToRender.getWidth(), (int)locationOfFirstTileToRender.getHeight(),null);
			
			WritableRaster blendingRaster = bi.getRaster();
			if(opacityPaintContext != null){
				Raster r = opacityPaintContext.getRaster(x, y, w, h);
				//copy the alpha values
				for(int i = 0; i < w; i++){
					for(int j = 0; j < h; j++){
						blendingRaster.setSample(i, j, 3, r.getSample(i, j, 3));
					}
				}
			}
			
			return blendingRaster;
		}

		public ColorModel getColorModel() {
			return cm;
		}

		public void dispose() {
		}
	}

	private final BufferedImage sourceImage;
	private final Rectangle2D locationOfFirstTileToRender;
	private AffineTransform at;
	private Paint fOpacityMaskPaint;

	ImagePaint(BufferedImage sourceImage, Rectangle2D locationOfFirstTileToRender, AffineTransform at) {
		this.sourceImage = sourceImage;
		this.locationOfFirstTileToRender = locationOfFirstTileToRender;
		this.at = at;
	}

	public PaintContext createContext(final ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			final AffineTransform xform, RenderingHints hints) {
		
		PaintContext opacityPaintContext = null;
		if(fOpacityMaskPaint != null){
			opacityPaintContext = fOpacityMaskPaint.createContext(new BufferedImage(1,1,BufferedImage.TYPE_4BYTE_ABGR).getColorModel(), deviceBounds, userBounds, xform, hints);
		}

		return new ImagePaintContext(xform, cm, opacityPaintContext);
	}

	public int getTransparency() {
		return Paint.OPAQUE;
	}

	public void translate(double d, double e) {
		AffineTransform t = AffineTransform.getTranslateInstance(d, e); 
		t.concatenate(at);
		at = t;
	}

	public void setOpacityMaskPaint(Paint blendingFillPaint) {
		fOpacityMaskPaint = blendingFillPaint;
		
	}
}