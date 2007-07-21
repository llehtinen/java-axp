package viewer.rendering.brushes;

import java.awt.Graphics2D;
import java.awt.PaintContext;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;
import java.util.Vector;

import viewer.rendering.AWTXPSRenderer;
import viewer.rendering.AWTXPSRenderingUtils;
import viewer.rendering.FontLoader;
import viewer.rendering.ImageLoader;
import xps.api.XPSError;
import xps.api.model.document.page.IVisualBrush;
import xps.impl.XPSVisualElementIterator;
import xps.impl.document.jaxb.STTileMode;

public class AWTXPSVisualPaintContext extends AWTXPSPaintContext {

	private AffineTransform fUserToDeviceTransform;
	private FontLoader fFontLoader;
	private Rectangle2D fLocationOfFirstTileToRender;
	private AffineTransform fCurrentTransform;
	private IVisualBrush fVisualBrush;
	private ImageLoader fImageLoader;
	private Rectangle2D fUserBounds;

	public AWTXPSVisualPaintContext(ColorModel cm, PaintContext opacityPaintContext, AffineTransform xform,
			IVisualBrush visualBrush, FontLoader fontLoader, ImageLoader imageLoader, Rectangle2D locationOfFirstTileToRender,
			AffineTransform brushTransform, Rectangle2D userBounds) {
		
		super(cm, opacityPaintContext);
		
		fUserToDeviceTransform = xform;
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fLocationOfFirstTileToRender = locationOfFirstTileToRender;
		fCurrentTransform = brushTransform;
		fVisualBrush = visualBrush;
		fUserBounds = userBounds;
	}

	protected Raster getSourceRaster(int x, int y, int w, int h) {
		BufferedImage bi = new BufferedImage(w,h,BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = (Graphics2D)bi.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g2.setClip(0, 0, w, h);
		AffineTransform totalTransform = calculateTotalTransform(AffineTransform.getTranslateInstance(-x, -y));
		g2.setTransform(totalTransform);
		try {
			if(fVisualBrush.getTileMode() != STTileMode.NONE){
				TileInfo tilePoints[] = getTilePoints();
				for (TileInfo info : tilePoints) {
					Graphics2D singleTileGraphics = (Graphics2D)g2.create();
					boolean flipX = (fVisualBrush.getTileMode() == STTileMode.FLIP_X || fVisualBrush.getTileMode() == STTileMode.FLIP_XY)  &&  !info.fXEvenRepitition;
					boolean flipY = (fVisualBrush.getTileMode() == STTileMode.FLIP_Y || fVisualBrush.getTileMode() == STTileMode.FLIP_XY) &&  !info.fYEvenRepitition;
					renderSingleTile(singleTileGraphics, info.fTileOrigin, flipX, flipY);
				}
			} else {
				renderSingleTile(g2, fLocationOfFirstTileToRender, false, false);
			}
		} catch (XPSError e) {
			//Not  much to do here.
		}
		
		return bi.getRaster();
	}
	
	private void renderSingleTile(Graphics2D singleTileGraphics, Rectangle2D tileBounds, boolean flipX, boolean flipY) throws XPSError {
		singleTileGraphics.translate(tileBounds.getX(), tileBounds.getY());
		
		if(flipX){
			AffineTransform flipXTransform = AffineTransform.getScaleInstance(-1, 1);
			flipXTransform.concatenate(AffineTransform.getTranslateInstance(-tileBounds.getWidth(), 0));
			singleTileGraphics.transform(flipXTransform);
		} 
		
		if(flipY){
			AffineTransform flipYTransform = AffineTransform.getScaleInstance(1, -1);
			flipYTransform.concatenate(AffineTransform.getTranslateInstance(0,-tileBounds.getHeight()));
			singleTileGraphics.transform(flipYTransform);
		} 

		applyViewboxScaleAndTranslation(singleTileGraphics);
		AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(fFontLoader, fImageLoader, singleTileGraphics);
		XPSVisualElementIterator iterator = new XPSVisualElementIterator(fVisualBrush);
		iterator.accept(visualBrushRenderer);
	}

	private TileInfo[] getTilePoints() {
		Vector<TileInfo> tilePoints = new Vector<TileInfo>();
		//find the first X and Y coordinates in page coordinate space that will show a portion of the tile to be shown
		
		double startingX = fLocationOfFirstTileToRender.getX();
		double startingY = fLocationOfFirstTileToRender.getY();
		boolean evenX = true;
		boolean evenY = true;
		
		//find first x. 
		while(startingX + fLocationOfFirstTileToRender.getWidth() > fUserBounds.getX()){
			startingX -= fLocationOfFirstTileToRender.getWidth();
			evenX = !evenX;
		}
		
		while(startingY + fLocationOfFirstTileToRender.getHeight() > fUserBounds.getY()){
			startingY -= fLocationOfFirstTileToRender.getHeight();
			evenY = !evenY;
		}

		double y = startingY;
		while(y < fUserBounds.getMaxY()){
			double x = startingX;	
			while(x < fUserBounds.getMaxX() ){
				Rectangle2D tileBounds = new Rectangle2D.Double(x,y, fLocationOfFirstTileToRender.getWidth(), fLocationOfFirstTileToRender.getHeight());
				tilePoints.add(new TileInfo(tileBounds, evenX, evenY));
				x += fLocationOfFirstTileToRender.getWidth();
				evenX = !evenX;
			}
			y += fLocationOfFirstTileToRender.getHeight();
			evenY = ! evenY;
		}
		
		
		return (TileInfo[]) tilePoints.toArray(new TileInfo[tilePoints.size()]);
		
	}

	private void applyViewboxScaleAndTranslation(Graphics2D g2) throws XPSError {
		//take into account the scaling for viewbox -> viewport
		Rectangle2D viewport = AWTXPSRenderingUtils.createRectangle(fVisualBrush.getViewport());
		Rectangle2D viewbox = AWTXPSRenderingUtils.createRectangle(fVisualBrush.getViewbox());
		double xScale = viewport.getWidth() / viewbox.getWidth();
		double yScale = viewport.getHeight() / viewbox.getHeight();
		
		g2.transform(AffineTransform.getScaleInstance(xScale, yScale));
	}

	protected AffineTransform calculateTotalTransform(AffineTransform base) {
		AffineTransform total = new AffineTransform(base);
		total.concatenate(fUserToDeviceTransform);
		total.concatenate(fCurrentTransform);
		return total;
	}
	
	protected static class TileInfo {
		public final Rectangle2D fTileOrigin;
		public final boolean fXEvenRepitition;
		public final boolean fYEvenRepitition;
		
		public TileInfo(Rectangle2D tileOrigin, boolean evenXRepitition, boolean evenYRepitition) {
			super();
			fTileOrigin = tileOrigin;
			fXEvenRepitition = evenXRepitition;
			fYEvenRepitition = evenYRepitition;
		}
		
	}

}
