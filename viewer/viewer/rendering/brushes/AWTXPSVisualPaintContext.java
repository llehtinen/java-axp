package viewer.rendering.brushes;

import java.awt.Graphics2D;
import java.awt.PaintContext;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.ColorModel;

import viewer.rendering.AWTXPSRenderer;
import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import xps.api.XPSError;
import xps.api.model.document.page.IVisualBrush;
import xps.impl.XPSVisualElementIterator;

public class AWTXPSVisualPaintContext extends AWTXPSTilingPaintContext {

	private IVisualBrush fVisualBrush;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	public AWTXPSVisualPaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			IVisualBrush visualBrush, FontLoader fontLoader, ImageLoader imageLoader,
			Rectangle2D locationOfFirstTileToRender, AffineTransform brushTransform, Rectangle2D userBounds) throws XPSError {
		super(cm, opacityPaintContext, xform, brushTransform, userBounds, visualBrush.getViewport(), visualBrush.getViewbox(), visualBrush.getTileMode());
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fVisualBrush = visualBrush;
	}
	
	@Override
	protected void renderSingleTile(Graphics2D singleTileGraphics) {
		try {
			AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(fFontLoader, fImageLoader, singleTileGraphics);
			XPSVisualElementIterator iterator = new XPSVisualElementIterator(fVisualBrush);
			iterator.accept(visualBrushRenderer);
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
