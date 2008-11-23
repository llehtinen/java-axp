package javaaxp.swingviewer.service.impl.viewer.brushes;

import java.awt.Color;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;


public class SolidColourAWTXPSPaint extends AWTXPSPaint {
	private Color fColour;

	public SolidColourAWTXPSPaint(Color c) {
		fColour = c;
	}

	@Override
	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) {
		return new SolidColourAWTXPSPaintContext(ColorModel.getRGBdefault(), opacityPaintContext, fColour.createContext(cm, deviceBounds, userBounds, xform, hints));
	}

}
