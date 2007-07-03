package xps.impl.ui.rendering;

import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.geom.AffineTransform;
import java.awt.geom.NoninvertibleTransformException;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

import xps.impl.document.jaxb.STTileMode;
import xps.impl.zipfileaccess.LRUCache;
import xps.impl.zipfileaccess.LRUCache.LRUCostFunction;

public class ImageBrushPaint implements Paint {

	
	
	private static LRUCache<ImageBrushDescriptor, ImageBrushPaint> fImageBrushPaintCache = new LRUCache<ImageBrushDescriptor, ImageBrushPaint>(5*1024*1024, new LRUCostFunction<ImageBrushPaint>() {
		public int storageCost(ImageBrushPaint value) {
			return value.fImage.getHeight() * value.fImage.getWidth() * value.fImage.getColorModel().getNumComponents();
		}
	});

	private BufferedImage fImage;
	private AffineTransform fTransform;
	private Rectangle2D fLocationOfFirstTileToRender;
	private STTileMode fTileMode;
	private double fOpacity;
	private AffineTransform fLastDeviceTransform;
	private Rectangle2D fLastUserBounds;
	private CustomPaintContext fContext;

	
	private static class ImageBrushDescriptor {
		public AffineTransform fTransform;
		public Rectangle2D fPortionOfSourceImageToBeRendered;
		public Rectangle2D fLocationOfFirstTileToRender;
		public STTileMode fTileMode;
		public double fOpacity;
		public String fImageSource;
		public ImageBrushDescriptor(AffineTransform transform, Rectangle2D portionOfSourceImageToBeRendered, Rectangle2D locationOfFirstTileToRender, STTileMode tileMode, double opacity, String imageSource) {
			super();
			fTransform = transform;
			fPortionOfSourceImageToBeRendered = portionOfSourceImageToBeRendered;
			fLocationOfFirstTileToRender = locationOfFirstTileToRender;
			fTileMode = tileMode;
			fOpacity = opacity;
			fImageSource = imageSource;
		}
		@Override
		public int hashCode() {
			final int PRIME = 31;
			int result = 1;
			result = PRIME * result + ((fImageSource == null) ? 0 : fImageSource.hashCode());
			result = PRIME * result + ((fLocationOfFirstTileToRender == null) ? 0 : fLocationOfFirstTileToRender.hashCode());
			long temp;
			temp = Double.doubleToLongBits(fOpacity);
			result = PRIME * result + (int) (temp ^ (temp >>> 32));
			result = PRIME * result + ((fPortionOfSourceImageToBeRendered == null) ? 0 : fPortionOfSourceImageToBeRendered.hashCode());
			result = PRIME * result + ((fTileMode == null) ? 0 : fTileMode.hashCode());
			result = PRIME * result + ((fTransform == null) ? 0 : fTransform.hashCode());
			return result;
		}
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			final ImageBrushDescriptor other = (ImageBrushDescriptor) obj;
			if (fImageSource == null) {
				if (other.fImageSource != null)
					return false;
			} else if (!fImageSource.equals(other.fImageSource))
				return false;
			if (fLocationOfFirstTileToRender == null) {
				if (other.fLocationOfFirstTileToRender != null)
					return false;
			} else if (!fLocationOfFirstTileToRender.equals(other.fLocationOfFirstTileToRender))
				return false;
			if (Double.doubleToLongBits(fOpacity) != Double.doubleToLongBits(other.fOpacity))
				return false;
			if (fPortionOfSourceImageToBeRendered == null) {
				if (other.fPortionOfSourceImageToBeRendered != null)
					return false;
			} else if (!fPortionOfSourceImageToBeRendered.equals(other.fPortionOfSourceImageToBeRendered))
				return false;
			
			if (fTileMode != other.fTileMode)
				return false;
			
			if (fTransform == null) {
				if (other.fTransform != null)
					return false;
			} else if (!fTransform.equals(other.fTransform))
				return false;
			return true;
		}
	}
	
	
	
	public static ImageBrushPaint getImageBrushPaint(BufferedImage bi, AffineTransform at, Rectangle2D portionOfSourceImageToBeRendered, Rectangle2D locationOfFirstTileToRender, STTileMode tileMode, double opacity, String imageSource){
		ImageBrushDescriptor d = new ImageBrushDescriptor(at, portionOfSourceImageToBeRendered, locationOfFirstTileToRender,tileMode, opacity, imageSource);
		ImageBrushPaint p = null;
		p = fImageBrushPaintCache.get(d);
		if(p == null){
			p = new ImageBrushPaint(bi, at, portionOfSourceImageToBeRendered, locationOfFirstTileToRender,tileMode, opacity);
			fImageBrushPaintCache.put(d, p);
		}
		return p;
	}
	

	public ImageBrushPaint(BufferedImage bi, AffineTransform at, Rectangle2D portionOfSourceImageToBeRendered, Rectangle2D locationOfFirstTileToRender, STTileMode tileMode, double opacity) {
		try {
			if((int)(portionOfSourceImageToBeRendered.getX() + portionOfSourceImageToBeRendered.getWidth()) < bi.getWidth() || 
					(int)(portionOfSourceImageToBeRendered.getY() + portionOfSourceImageToBeRendered.getHeight()) < bi.getHeight()){
				//must make a new buffered image
				fImage = bi.getSubimage((int)portionOfSourceImageToBeRendered.getX(), (int)portionOfSourceImageToBeRendered.getY(), (int)portionOfSourceImageToBeRendered.getWidth(), (int)portionOfSourceImageToBeRendered.getHeight());
			} else {
				fImage = bi;
			}
		} catch (Throwable t){
			System.out.println(t.getMessage());
		}
		fTransform = at;
		fLocationOfFirstTileToRender  = locationOfFirstTileToRender;
		fTileMode = tileMode;
		fOpacity = opacity;
	}

	public PaintContext createContext(ColorModel cm, Rectangle deviceBounds,
			Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {
		
		if(fLastDeviceTransform == null || fLastUserBounds == null){
			fLastDeviceTransform = xform;
			fLastUserBounds = userBounds;
			fContext = new CustomPaintContext( deviceBounds, xform);
		} else if(!fLastDeviceTransform.equals(xform) || !fLastUserBounds.equals(userBounds)){
			fLastDeviceTransform = xform;
			fLastUserBounds = userBounds;
			fContext = new CustomPaintContext( deviceBounds, xform);
		}
		return fContext;
	}

	public int getTransparency() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	public class CustomPaintContext implements PaintContext {
		private BufferedImage fSourceBufferedImage;
		private double fDeviceX;
		private double fDeviceY;

		public CustomPaintContext(Rectangle deviceBounds, AffineTransform xform) {
			fDeviceX = deviceBounds.getX();
			fDeviceY = deviceBounds.getY();
			fSourceBufferedImage = new BufferedImage((int)Math.ceil(deviceBounds.getWidth()) , (int)Math.ceil(deviceBounds.getHeight()), BufferedImage.TYPE_4BYTE_ABGR);
//			fSourceBufferedImage = new BufferedImage((int)(deviceBounds.getX() + deviceBounds.getWidth()) + 1, (int)(deviceBounds.getHeight()   + deviceBounds.getY()) + 1, BufferedImage.TYPE_4BYTE_ABGR);
			
			
			//The bounding device rectangle, one we account for the space-saving transformation
			Rectangle2D deviceBounds2D = new Rectangle2D.Double(0, 0, deviceBounds.getWidth(), deviceBounds.getHeight());
			
			//translate to new origin
			AffineTransform brushTransform = new AffineTransform() /*AffineTransform.getTranslateInstance(-deviceBounds.getX(), -deviceBounds.getY())*/;
			brushTransform.concatenate(xform);
			brushTransform.concatenate(fTransform);
			double matrix[] = new double[6];
			brushTransform.getMatrix(matrix);
			matrix[4] = 0;
			matrix[5] = 0;
			brushTransform = new AffineTransform(matrix);
			
			Graphics2D g2 = fSourceBufferedImage.createGraphics();
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g2.setTransform(brushTransform);
			tileImage(brushTransform, deviceBounds2D, g2);
		}
		private void tileImage(AffineTransform brushTransform, Rectangle2D deviceBounds2D, Graphics2D g2) {
			if(fTileMode == STTileMode.NONE){
				g2.translate(fLocationOfFirstTileToRender.getX(), fLocationOfFirstTileToRender.getY());
				g2.drawImage(fImage, 0,0, (int)fLocationOfFirstTileToRender.getWidth(),(int)fLocationOfFirstTileToRender.getHeight(),null);
				
			} else {
				//TODO: Test
				try {
					AffineTransform reverseBrushTransform = brushTransform.createInverse();
					Shape deviceBoundInViewboxSpace = reverseBrushTransform.createTransformedShape(deviceBounds2D);
					Rectangle2D deviceBoundInViewboxSpaceBoundingBox = deviceBoundInViewboxSpace.getBounds2D();
					
					//given fLocationOfFirstTileToRender's position, calc how many can fit above, 
					int numTilesLeft = (int)(fLocationOfFirstTileToRender.getX() / fLocationOfFirstTileToRender.getWidth()) + 1;
					int numTilesAbove = (int)(fLocationOfFirstTileToRender.getY() / fLocationOfFirstTileToRender.getHeight()) + 1;
					int startingX = (int)(deviceBoundInViewboxSpaceBoundingBox.getX() - numTilesLeft * fLocationOfFirstTileToRender.getWidth());
					int startingY = (int)(deviceBoundInViewboxSpaceBoundingBox.getY() - numTilesAbove * fLocationOfFirstTileToRender.getHeight()) + 1;
					int numTilesPerRow = (int)(deviceBoundInViewboxSpaceBoundingBox.getWidth() / fLocationOfFirstTileToRender.getWidth()) + 1;
					int numTilesPerColumn = (int)(deviceBoundInViewboxSpaceBoundingBox.getHeight() / fLocationOfFirstTileToRender.getHeight()) + 1;
					
					for(int row = 0; row <= numTilesPerColumn; row++){
						for(int column = 0; column <= numTilesPerRow; column++){
							Rectangle2D currTileLocation = new Rectangle2D.Double(startingX + column * fLocationOfFirstTileToRender.getWidth(), startingY + row * fLocationOfFirstTileToRender.getHeight(), fLocationOfFirstTileToRender.getWidth(),fLocationOfFirstTileToRender.getHeight());
							if(deviceBoundInViewboxSpace.intersects(currTileLocation)){
								boolean sameVertOrientation = ((row - numTilesLeft) & 1) == 0;
								boolean sameHorizOrientation = ((column -  numTilesAbove) & 1) == 0;

								STTileMode mode = fTileMode;
								//mode = STTileMode.FLIP_XY;
								AffineTransform imageTransform = new AffineTransform();
								
								imageTransform.translate((int)currTileLocation.getX(), (int)currTileLocation.getY());
								if(!sameVertOrientation && (mode == STTileMode.FLIP_Y || mode == STTileMode.FLIP_XY)){
									imageTransform.concatenate(AffineTransform.getScaleInstance(1, -1));
									imageTransform.concatenate(AffineTransform.getTranslateInstance(0, -fImage.getHeight()));
								}
								
								if(!sameHorizOrientation&& (mode == STTileMode.FLIP_X || mode == STTileMode.FLIP_XY)){
									imageTransform.concatenate(AffineTransform.getScaleInstance(-1, 1));
									imageTransform.concatenate(AffineTransform.getTranslateInstance(-fImage.getWidth(), 0));
								}
								
								//TODO: Should the image scaled first? In non-tiled mode we specific the size of the image in 
								//Viewport space, while implicity defines the scaled.
								//Can/Should this be done with imageTransform?
								g2.drawImage(fImage, imageTransform, null);


							}
						}
					}
				} catch (NoninvertibleTransformException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		}
		public void dispose() {
		}
		public ColorModel getColorModel() {
			return fSourceBufferedImage.getColorModel();
		}

		public Raster getRaster(int x, int y, int w, int h) {
//			return fSourceBufferedImage.getSubimage(0, 0, w, h).getRaster();
			try {
				return fSourceBufferedImage.getSubimage((int)(x - fDeviceX), (int)(y - fDeviceY), w, h).getRaster();
//				return fSourceBufferedImage.getSubimage((int)(x ), (int)(y ), w, h).getRaster();
			} catch (Throwable t){
				System.out.println("error");
				return fSourceBufferedImage.getSubimage(0, 0, w, w).getRaster();
			}
		}

	}

}
