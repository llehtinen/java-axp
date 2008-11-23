/**
 * 
 */
package viewer.rendering.brushes;

import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import viewer.rendering.AWTXPSRenderingUtils;
import xps.api.XPSError;
import xps.api.model.document.page.IImageBrush;
import xps.impl.document.jaxb.STTileMode;

public class AWTXPSImagePaint extends AWTXPSPaint {

	private BufferedImage fSourceImage;
	private AffineTransform fImageBrushTransform;
	private IImageBrush fImageBrush;

	public AWTXPSImagePaint(BufferedImage sourceImage, IImageBrush brush, AffineTransform imageBrushTransform){
		fSourceImage = sourceImage;
		fImageBrush = brush;
		fImageBrushTransform = imageBrushTransform;
	}
	
	@Override
	protected AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds,
			AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError {
		if((fImageBrush.getTileMode() == null || fImageBrush.getTileMode() == STTileMode.NONE) && fSourceImage.getWidth() * fSourceImage.getHeight() > (256 * 256)){
			//more memory intensive, but faster for large images
			return new PrerenderingAWTXPSImagePaintContext(cm,opacityPaintContext,xform,fSourceImage, AWTXPSRenderingUtils.createRectangle(fImageBrush.getViewport()), fImageBrushTransform);			
		}
		return new AWTXPSTilingImagePaintContext(cm,opacityPaintContext,xform,fImageBrushTransform,userBounds,fImageBrush.getViewport(),fImageBrush.getViewbox(), fImageBrush.getTileMode(), fSourceImage);
	}

}