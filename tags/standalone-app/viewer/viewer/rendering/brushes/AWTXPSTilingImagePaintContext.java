package viewer.rendering.brushes;

import java.awt.Graphics2D;
import java.awt.PaintContext;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import xps.api.XPSError;
import xps.impl.document.jaxb.STTileMode;

public class AWTXPSTilingImagePaintContext extends AWTXPSTilingPaintContext {

	private BufferedImage fSourceImage;

	public AWTXPSTilingImagePaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			AffineTransform brushTransform, Rectangle2D userBounds, String viewPortRectangle,
			String viewBoxRectangle, STTileMode tileMode, BufferedImage sourceImage) throws XPSError {
		super(cm, opacityPaintContext, xform, brushTransform, userBounds, viewPortRectangle, viewBoxRectangle,
				tileMode);
		fSourceImage = sourceImage;
	}

	protected void renderSingleTile(Graphics2D singleTileGraphics) {
		singleTileGraphics.drawImage(fSourceImage, 0,0,null);
	}

}
