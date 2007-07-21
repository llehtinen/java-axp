package viewer.rendering.brushes;

import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import xps.api.model.document.page.IVisualBrush;

public class AWTXPSVisualPaint extends AWTXPSPaint {

	private Rectangle2D fLocationOfFirstTileToRender;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private AffineTransform fBrushTransform;
	private IVisualBrush fVisualBrush;

	public AWTXPSVisualPaint(Rectangle2D locationOfFirstTileToRender, IVisualBrush brush, FontLoader fontLoader, ImageLoader imageLoader, AffineTransform at) {
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fBrushTransform = at;
		fVisualBrush = brush;
	}

	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) {
		return new AWTXPSVisualPaintContext(cm,opacityPaintContext,xform,fVisualBrush,fFontLoader, fImageLoader, fLocationOfFirstTileToRender, fBrushTransform, userBounds);
	}

}
