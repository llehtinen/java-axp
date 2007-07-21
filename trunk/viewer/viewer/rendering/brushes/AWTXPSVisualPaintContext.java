package viewer.rendering.brushes;

import java.awt.Graphics2D;
import java.awt.PaintContext;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

import viewer.rendering.AWTXPSRenderer;
import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import xps.api.XPSError;
import xps.api.model.document.page.IVisualBrush;
import xps.impl.XPSVisualElementIterator;

public class AWTXPSVisualPaintContext extends AWTXPSPaintContext {

	private AffineTransform fUserToDeviceTransform;
	private FontLoader fFontLoader;
	private Rectangle2D fLocationOfFirstTileToRender;
	private AffineTransform fCurrentTransform;
	private IVisualBrush fVisualBrush;
	private ImageLoader fImageLoader;

	public AWTXPSVisualPaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			IVisualBrush visualBrush, FontLoader fontLoader, ImageLoader imageLoader, Rectangle2D locationOfFirstTileToRender,
			AffineTransform brushTransform) {
		
		super(cm, opacityPaintContext);
		
		fUserToDeviceTransform = xform;
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fCurrentTransform = brushTransform;
		fVisualBrush = visualBrush;
	}

	protected Raster getSourceRaster(int x, int y, int w, int h) {
		BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = (Graphics2D)bi.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g2.setClip(0, 0, w, h);
		AffineTransform totalTransform = calculateTotalTransform(AffineTransform.getTranslateInstance(-x, -y));
		g2.setTransform(totalTransform);
		
		//create the renderer that will be used to render the visual brush
		try {
			g2.translate(fLocationOfFirstTileToRender.getX(), fLocationOfFirstTileToRender.getY());
			g2.clipRect(0, 0, (int)Math.ceil(fLocationOfFirstTileToRender.getWidth()), (int)Math.ceil(fLocationOfFirstTileToRender.getHeight()));
			AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(fFontLoader, fImageLoader, g2);
			XPSVisualElementIterator iterator = new XPSVisualElementIterator(fVisualBrush);
			iterator.accept(visualBrushRenderer);
		} catch (XPSError e) {
			//Not  much to do here.
		}
		
		return bi.getRaster();
	}
	
	protected AffineTransform calculateTotalTransform(AffineTransform base) {
		AffineTransform total = new AffineTransform(base);
		total.concatenate(fUserToDeviceTransform);
		total.concatenate(fCurrentTransform);
		return total;
	}

}
