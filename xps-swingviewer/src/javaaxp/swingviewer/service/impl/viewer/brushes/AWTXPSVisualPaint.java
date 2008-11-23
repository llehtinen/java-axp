package javaaxp.swingviewer.service.impl.viewer.brushes;

import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.page.IVisualBrush;
import javaaxp.swingviewer.service.impl.rendering.FontLoader;
import javaaxp.swingviewer.service.impl.rendering.ImageLoader;

public class AWTXPSVisualPaint extends AWTXPSPaint {

	private Rectangle2D fLocationOfFirstTileToRender;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private AffineTransform fBrushTransform;
	private IVisualBrush fVisualBrush;
	private IXPSAccess fXPSAccess;

	public AWTXPSVisualPaint(Rectangle2D locationOfFirstTileToRender, IVisualBrush brush, FontLoader fontLoader, ImageLoader imageLoader, AffineTransform at, IXPSAccess xpsAccess) {
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fBrushTransform = at;
		fVisualBrush = brush;
		fXPSAccess = xpsAccess;
	}

	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError {
		return new AWTXPSVisualPaintContext(cm,opacityPaintContext,xform,fVisualBrush, fFontLoader, fImageLoader, fLocationOfFirstTileToRender,fBrushTransform, userBounds, fXPSAccess);
	}

}
