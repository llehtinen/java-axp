package viewer.rendering.brushes;

import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import xps.api.XPSError;

public abstract class AWTXPSPaint implements Paint {

	
	private Paint fOpacityMaskPaint;

	public PaintContext createContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {
		PaintContext opacityPaintContext = null;
		if(fOpacityMaskPaint != null){
			opacityPaintContext = fOpacityMaskPaint.createContext(new BufferedImage(1,1,BufferedImage.TYPE_4BYTE_ABGR).getColorModel(), deviceBounds, userBounds, xform, hints);
		}
		
		try {
			return getPaintContext(cm, deviceBounds, userBounds, xform, hints, opacityPaintContext);
		} catch (XPSError e) {
			throw new RuntimeException(e);
		}
	}

	protected abstract AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError;

	public int getTransparency() {
		return 0;
	}
	
	public void setOpacityMaskPaint(Paint blendingFillPaint) {
		fOpacityMaskPaint = blendingFillPaint;
	}

}
