package xps.impl.ui.rendering.brushes;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.PaintContext;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

public class AWTXPSImagePaintContext extends AWTXPSPaintContext {

	private AffineTransform fUserToDeviceTransform;
	private AffineTransform fCurrentTransform;
	private Rectangle2D fLocationOfFirstTileToRender;
	private Image fSourceImage;

	public AWTXPSImagePaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform, BufferedImage sourceImage, Rectangle2D locationOfFirstTileToRender, AffineTransform imageBrushTransform) {
		super(cm, opacityPaintContext);
		fUserToDeviceTransform = xform;
		fSourceImage = sourceImage;
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fCurrentTransform = imageBrushTransform;
	}



	@Override
	protected Raster getSourceRaster(int x, int y, int w, int h) {
		BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = (Graphics2D)bi.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g2.setClip(0, 0, w, h);
		AffineTransform base = AffineTransform.getTranslateInstance(-x, -y);
		AffineTransform total = new AffineTransform(base);
		total.concatenate(fUserToDeviceTransform);
		total.concatenate(fCurrentTransform);
		g2.setTransform(total);
		g2.drawImage(fSourceImage,(int)fLocationOfFirstTileToRender.getX(), (int)fLocationOfFirstTileToRender.getY(),
				(int)fLocationOfFirstTileToRender.getWidth(), (int)fLocationOfFirstTileToRender.getHeight(),null);
		
		return bi.getRaster();
	}
	
	
	

}
