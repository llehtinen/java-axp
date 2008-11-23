package javaaxp.swingviewer.service.impl.viewer.brushes;

import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;

public class AWTXPSPaintWrapper extends AWTXPSPaint {

	private Paint mPaint;

	public AWTXPSPaintWrapper(Paint p) {
		mPaint = p;
	}

	@Override
	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) {
		return new AWTXPSPaintContextWrapper(mPaint.createContext(cm, deviceBounds, userBounds, xform, hints),cm, opacityPaintContext);
	}


}
