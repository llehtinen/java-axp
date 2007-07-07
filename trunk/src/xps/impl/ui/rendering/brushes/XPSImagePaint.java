/**
 * 
 */
package xps.impl.ui.rendering.brushes;

import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

public class XPSImagePaint extends AWTXPSPaint {

	private BufferedImage fSourceImage;
	private Rectangle2D fLocationOfFirstTileToRender;
	private AffineTransform fImageBrushTransform;

	public XPSImagePaint(BufferedImage sourceImage, Rectangle2D locationOfFirstTileToRender, AffineTransform imageBrushTransform){
		fSourceImage = sourceImage;
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fImageBrushTransform = imageBrushTransform;
	}
	
	@Override
	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) {
		return new AWTXPSImagePaintContext(cm,opacityPaintContext,xform,fSourceImage, fLocationOfFirstTileToRender, fImageBrushTransform);
	}

}