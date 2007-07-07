package xps.impl.ui.rendering.brushes;

import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

public abstract class AWTXPSPaint implements Paint {

	
	private Paint fOpacityMaskPaint;

	public PaintContext createContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {
		PaintContext opacityPaintContext = null;
		if(fOpacityMaskPaint != null){
			opacityPaintContext = fOpacityMaskPaint.createContext(new BufferedImage(1,1,BufferedImage.TYPE_4BYTE_ABGR).getColorModel(), deviceBounds, userBounds, xform, hints);
		}
		
		return getPaintContext(cm, deviceBounds, userBounds, xform, hints, opacityPaintContext);
	}

	protected abstract AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext);

	public int getTransparency() {
		return 0;
	}
	
	public void setOpacityMaskPaint(Paint blendingFillPaint) {
		fOpacityMaskPaint = blendingFillPaint;
	}

}
