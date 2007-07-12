package viewer.rendering;

import java.awt.AlphaComposite;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import xps.api.IXPSAccess;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.IDocumentReference;
import xps.api.model.document.page.IBrush;
import xps.api.model.document.page.ICanvas;
import xps.api.model.document.page.IFixedPage;
import xps.api.model.document.page.IGlyphs;
import xps.api.model.document.page.IImageBrush;
import xps.api.model.document.page.ILinearGradientBrush;
import xps.api.model.document.page.IPath;
import xps.api.model.document.page.IPathGeometry;
import xps.api.model.document.page.IRadialGradientBrush;
import xps.api.model.document.page.ISolidColorBrush;
import xps.api.model.document.page.ITransform;
import xps.api.model.document.page.ITransformMatrix;
import xps.api.model.document.page.IVisualBrush;
import xps.api.util.DelegatingResourceDictionary;
import xps.impl.zipfileaccess.LRUCache;
import xps.impl.zipfileaccess.XPSZipFileAccess;

@Deprecated
public class XPSRenderer {

	private static final Pattern RESOURCE_REFERENCE_PATTERN = Pattern.compile("\\{StaticResource (.*)\\}");
	private static LRUCache<String, ImageBrushPaint> fImageBrushCache;

	public static void renderVisual(Graphics g, IVisualBrush vb, DelegatingResourceDictionary resources, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		if(vb.getVisualBrushVisual() != null && vb.getVisual() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		Graphics2D g2d = (Graphics2D)g.create();
		
		if(vb.getVisualBrushVisual() != null){
			//set the initial transform
			if(vb.getVisualBrushVisual().getCanvas() != null){
				renderCanvas(g2d, vb.getVisualBrushVisual().getCanvas(), resources, access, docRef);
			} else if(vb.getVisualBrushVisual().getGlyphs() != null){
				renderGlyphs(g2d, vb.getVisualBrushVisual().getGlyphs(), resources, access, docRef);
			} else if(vb.getVisualBrushVisual().getPath() != null){
				renderPath(g2d, vb.getVisualBrushVisual().getPath(), resources, access, docRef);
			}
		} else if(vb.getVisual() != null){
			Object o = dictionaryLookup(resources, vb.getVisual());
			if(o instanceof ICanvas){
				renderCanvas(g2d, (ICanvas)o, resources, access, docRef);
			} else if(o instanceof IGlyphs){
				renderGlyphs(g2d, (IGlyphs)o, resources, access, docRef);	
			} else if(o  instanceof IPath){
				renderPath(g2d, (IPath)o, resources, access, docRef);
			} else {
				throw new XPSError("invalid type of resource");
			}
		}
	}
	
	
	public static void renderPage(Graphics g, IFixedPage page, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		
		//set the initial transform
		applyGraphicsProperties(g2d, page);
		
		DelegatingResourceDictionary pageResourceDictionary;
		if(page.getFixedPageResources() != null) {
			pageResourceDictionary = new DelegatingResourceDictionary(null, page.getFixedPageResources().getResourceDictionary(),access, docRef);
		} else {
			pageResourceDictionary = DelegatingResourceDictionary.EMPTY_RESOURCE_DICTIONARY;
		}

		
		for(Object o : page.getPathOrGlyphsOrCanvas()){
			if(o instanceof IPath){
				renderPath(g2d, (IPath)o,pageResourceDictionary,access, docRef);
			} else if(o instanceof IGlyphs){
				renderGlyphs(g2d, (IGlyphs)o,pageResourceDictionary,access, docRef);
			} else if(o instanceof ICanvas){
				renderCanvas(g2d, (ICanvas)o,pageResourceDictionary,access, docRef);
			}
		}
	}



	private static void renderCanvas(Graphics g, ICanvas canvas, DelegatingResourceDictionary pageResourceDictionary, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		applyGraphicsProperties(g2d, canvas, pageResourceDictionary);
		
		if(canvas.getCanvasResources() != null){
			pageResourceDictionary = new DelegatingResourceDictionary(null, canvas.getCanvasResources().getResourceDictionary(), access, docRef);
		}
		
		for (Object o : canvas.getPathOrGlyphsOrCanvas()) {
			if(o instanceof IPath){
				renderPath(g2d, (IPath)o, pageResourceDictionary, access, docRef);
			} else if(o instanceof IGlyphs){
				renderGlyphs(g2d, (IGlyphs)o,pageResourceDictionary,access, docRef);
			} else if(o instanceof ICanvas){
				renderCanvas(g2d, (ICanvas)o,pageResourceDictionary,access, docRef);
			}
		}
	}



	private static void renderGlyphs(Graphics g, IGlyphs glyphs, DelegatingResourceDictionary pageResourceDictionary, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		g2d.setFont(g2d.getFont().deriveFont(1f));
		applyGraphicsProperties(g2d, glyphs, pageResourceDictionary);
		
		Font f = AWTXPSRenderingUtils.loadFont(glyphs.getFontUri(), access, docRef);
		g2d.setFont(f);
		
		g2d.translate(glyphs.getOriginX(), glyphs.getOriginY());
		g2d.scale(glyphs.getFontRenderingEmSize(), glyphs.getFontRenderingEmSize());
		
		Paint fillPaint = createPaint(glyphs.getFill(),  glyphs.getGlyphsFill(), pageResourceDictionary, access, docRef);

		g2d.setPaint(fillPaint);
		g2d.drawString(glyphs.getUnicodeString(), 0, 0);
	}




	private static void renderPath(Graphics g, IPath path, DelegatingResourceDictionary pageResourceDictionary, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		applyGraphicsProperties(g2d, path, pageResourceDictionary);
		
		Paint fillPaint = createPaint(path.getFill(), path.getPathFill(), pageResourceDictionary, access, docRef);
		Paint drawPaint = createPaint(path.getStroke(), path.getPathStroke(), pageResourceDictionary, access, docRef);
		
		Shape s = null;
		if(path.getPathData()!= null){
			s =renderPathData(g2d, fillPaint, drawPaint, path,access);
		} else if(path.getData() != null){
			s = renderTextPathData(g2d,fillPaint, drawPaint,path,pageResourceDictionary,access, docRef);					
		}
	}


	private static Paint createPaint(String pathData, IBrush brush, DelegatingResourceDictionary pageResourceDictionary, IXPSAccess access, IDocumentReference docRef) throws XPSError {
	   if(brush != null && pathData != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");   
	   }
		
		Paint fillPaint = null;
		if(pathData != null){
			Object o = dictionaryLookup(pageResourceDictionary, pathData);
			if(o != null){
				fillPaint = createPaintFromBrush(o,pageResourceDictionary,access, docRef);
			}
			
			fillPaint = AWTXPSRenderingUtils.createPaintFromShorthand(pathData);
		}
		if(fillPaint == null && brush != null){
			fillPaint = createPaintFromBrush(brush,pageResourceDictionary,access, docRef);
		}
		return fillPaint;
	}


	private static Object dictionaryLookup(DelegatingResourceDictionary pageResourceDictionary, String s) throws XPSSpecError, XPSError {
		Matcher m = RESOURCE_REFERENCE_PATTERN.matcher(s);
		
		Object o = null;
		if(m.matches()){
			String key = m.group(1);
			o = pageResourceDictionary.get(key);
			if(o == null){
				throw new XPSError("Dictionary key not found");
			}
		}
		return o;
	}

	private static Shape renderTextPathData(Graphics2D g, Paint fillPaint, Paint drawPaint, IPath path, DelegatingResourceDictionary pageResourceDictionary, IXPSAccess access, IDocumentReference docRef) throws XPSSpecError, XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		
		Shape s;
		Object o = dictionaryLookup(pageResourceDictionary, path.getData());
		if(o != null){
			if(o instanceof IPathGeometry){
				s = AWTXPSRenderingUtils.createShapeFromPathGeometry((IPathGeometry)o);
			} else {
				throw new XPSError("Key refers to wrong type");
			}
		} else {
			s = AWTXPSRenderingUtils.createShapeFromShorthandCommands(path.getData(), true);
		}
		
		
		if(s != null ){
			Rectangle2D bounds = s.getBounds2D();
			//now, apply an opacity mask.
			if(path.getOpacityMask() != null){

			} else if(path.getPathOpacityMask() != null){
				//BufferedImage bi = access.getImageResource(path.getPathOpacityMask().getImageBrush().getImageSource());
				//Graphics2D compositeSurface = bi.createGraphics();
				//compositeSurface.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
				BufferedImage bi = new BufferedImage((int)Math.ceil(bounds.getWidth()), (int)Math.ceil(bounds.getHeight()), BufferedImage.TYPE_4BYTE_ABGR);
				Graphics2D compositeSurface = bi.createGraphics();
				Paint p = createPaintFromBrush(path.getPathOpacityMask(), pageResourceDictionary, access, docRef);
				compositeSurface.setRenderingHint(RenderingHints.KEY_ALPHA_INTERPOLATION, RenderingHints.VALUE_ALPHA_INTERPOLATION_QUALITY);
				compositeSurface.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
				compositeSurface.setPaint(p);
				compositeSurface.fillRect(0, 0, bi.getWidth(), bi.getHeight());
				
				
				AffineTransform at = g2d.getTransform();
				double d[] = new double[6];
				at.getMatrix(d);
				d[4] = -bounds.getX() * g2d.getTransform().getScaleX();
				d[5] = -bounds.getY() * g2d.getTransform().getScaleY();
				compositeSurface.setTransform(new AffineTransform(d));
				
				
//				compositeSurface.setComposite(new Composite() {
//				
//					public CompositeContext createContext(ColorModel srcColorModel,
//							ColorModel dstColorModel, RenderingHints hints) {
//						// TODO Auto-generated method stub
//						return new CompositeContext() {
//						
//							public void dispose() {
//								// TODO Auto-generated method stub
//						
//							}
//						
//							public void compose(Raster src, Raster dstIn, WritableRaster dstOut) {
//								int i[] = new int[4];
//								for(int x = 0; x < src.getWidth(); x++){
//									for(int y = 0; y < src.getHeight(); y++){
//										src.getPixel(x, y, i);
//										i[3] = dstIn.getSample(x, y, 3);
//										dstOut.setPixel(x, y, i);
//									}
//								}
//							}
//						};
//					}
//				});
				
				boolean filled = false;
				boolean stroked = false;
				
				if(fillPaint != null){
					compositeSurface.setPaint(fillPaint);
					compositeSurface.fill(s);
					filled = true;
				}

				if(drawPaint != null){
					compositeSurface.setPaint(drawPaint);
					compositeSurface.draw(s);
					stroked = true;
				}
				
				
				g2d.translate(bounds.getX(), bounds.getY());
				g2d.drawImage(bi,0,0,(int)Math.ceil(bounds.getWidth()), (int)Math.ceil(bounds.getHeight()), null);

				
				if(stroked || filled){
					return s;	
				} else {
					return null;
				}
			}
		}
		
		
		
		
		boolean filled = false;
		boolean stroked = false;
		
		if(fillPaint != null){
			g2d.setPaint(fillPaint);
			g2d.fill(s);
			filled = true;
		}

		if(drawPaint != null){
			g2d.setPaint(drawPaint);
			g2d.draw(s);
			stroked = true;
		}
		
		if(stroked || filled){
			return s;	
		} else {
			return null;
		}
	}
	

	

	private static Shape renderPathData(Graphics g, Paint fillPaint, Paint drawPaint, IPath geo, IXPSAccess access) throws XPSError {
		Graphics2D g2d = (Graphics2D)g.create();
		Shape s = AWTXPSRenderingUtils.createShapeFromPathGeometry(geo.getPathData().getPathGeometry());
		
		boolean filled = false;
		boolean stroked = false;
		if(fillPaint != null){
			g2d.setPaint(fillPaint);
			g2d.fill(s);
			filled = true;
		}

		if(drawPaint != null){
			g2d.setPaint(drawPaint);
			g2d.draw(s);
			stroked = true; 
		}	
		
		if(stroked || filled){
			return s;	
		} else {
			return null;
		}
		
	}




	private static void applyGraphicsProperties(Graphics2D g2d, IFixedPage page) throws XPSError {
		g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		
		Rectangle2D r = new Rectangle2D.Double(0,0,page.getWidth(), page.getHeight());
		//apply content box clipping
		if(page.getContentBox() != null){
			r = AWTXPSRenderingUtils.createRectangle(page.getContentBox());
			if(r.getX() < 0 || r.getX() > page.getWidth()){
				throw new XPSSpecError(3,11,"Invalid content box OriginX");
			} else if(r.getY() < 0 || r.getY() > page.getHeight()){
				throw new XPSSpecError(3,12,"Invalid content box OriginY");
			} else if(r.getWidth() > page.getWidth() - r.getX()){
				throw new XPSSpecError(3,13,"Invalid content box width");
			} else if(r.getHeight() > page.getHeight() - r.getY()){
				throw new XPSSpecError(3,14,"Invalid content box height");
			} 
			
		}
		
		g2d.drawRect((int)r.getX(), (int)r.getY(), (int)r.getWidth(), (int)r.getHeight());
		g2d.setClip((int)r.getX(), (int)r.getY(), (int)r.getWidth(), (int)r.getHeight());
		
	}
	
	private static void applyGraphicsProperties(Graphics2D g2d, IGlyphs glyphs, DelegatingResourceDictionary pageResourceDictionary) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((glyphs.getGlyphsRenderTransform() != null && glyphs.getRenderTransform() != null) ||
		   (glyphs.getGlyphsClip() != null && glyphs.getClip() != null) ||
		   (glyphs.getGlyphsOpacityMask() != null && glyphs.getOpacityMask() != null) 
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		
		String renderTransformMatrix = getRenderTransformMatrix(glyphs.getRenderTransform(), glyphs.getGlyphsRenderTransform(), pageResourceDictionary); 
		if(renderTransformMatrix != null){
			g2d.transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
		}
		
		//handle cliping shape
		Shape clip = null;
		if(glyphs.getGlyphsClip()!= null){
			clip = AWTXPSRenderingUtils.createShapeFromPathGeometry(glyphs.getGlyphsClip().getPathGeometry());
		}
		if(clip == null && glyphs.getClip() != null){
			clip = AWTXPSRenderingUtils.createShapeFromShorthandCommands(glyphs.getClip(), true);
		}
		if(clip != null){
			g2d.setClip(clip);
		}
		
		
		if(glyphs.getOpacity() < 0f || glyphs.getOpacity() > 1.0f){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		} else {
			if(glyphs.getOpacity() < 1.0f){
				g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, (float)glyphs.getOpacity()));
			}
		}
	}
	
	private static void applyGraphicsProperties(Graphics2D g2d, IPath path, DelegatingResourceDictionary pageResourceDictionary) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((path.getPathRenderTransform() != null && path.getRenderTransform() != null) ||
		   (path.getPathClip() != null && path.getClip() != null) ||
		   (path.getPathOpacityMask() != null && path.getOpacityMask() != null) ||
		   (path.getPathData() != null && path.getData() != null)
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		String renderTransformMatrix = getRenderTransformMatrix(path.getRenderTransform(), path.getPathRenderTransform(), pageResourceDictionary); 
		if(renderTransformMatrix != null){
			g2d.transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
		}
		
		//handle cliping shape
		Shape clip = null;
		if(path.getPathClip()!= null){
			clip = AWTXPSRenderingUtils.createShapeFromPathGeometry(path.getPathClip().getPathGeometry());
		}
		if(clip == null && path.getClip() != null){
			clip = AWTXPSRenderingUtils.createShapeFromShorthandCommands(path.getClip(), true);
		}
		if(clip != null){
			g2d.setClip(clip);
		}
		
		
		if(path.getOpacity() < 0f || path.getOpacity() > 1.0f){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		} else {
			if(path.getOpacity() < 1.0f){
				g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, (float)path.getOpacity()));
			}
		}
		
		
		//TODO: Opacity mask
		
		//handle stroke
		
		BasicStroke s = AWTXPSRenderingUtils.getStroke(path.getStrokeDashArray(), path.getStrokeDashCap(), path.getStrokeDashOffset(), 
				path.getStrokeEndLineCap(), path.getStrokeLineJoin(), path.getStrokeMiterLimit(), path.getStrokeThickness());  
		g2d.setStroke(s);
	}
	
	private static void applyGraphicsProperties(Graphics2D g2d, ICanvas canvas, DelegatingResourceDictionary pageResourceDictionary) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((canvas.getRenderTransform() != null && canvas.getCanvasRenderTransform() != null) ||
		   (canvas.getCanvasClip() != null && canvas.getClip() != null) ||
		   (canvas.getCanvasOpacityMask() != null && canvas.getOpacityMask() != null)
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		String renderTransformMatrix = getRenderTransformMatrix(canvas.getRenderTransform(), canvas.getCanvasRenderTransform(), pageResourceDictionary); 
		if(renderTransformMatrix != null){
			g2d.transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
		}
		
		
		Shape clip = null;
		if(canvas.getCanvasClip()!= null){
			clip = AWTXPSRenderingUtils.createShapeFromPathGeometry(canvas.getCanvasClip().getPathGeometry());
		}
		if(clip == null && canvas.getClip() != null){
			clip = AWTXPSRenderingUtils.createShapeFromShorthandCommands(canvas.getClip(), true);
		}
		if(clip != null){
			g2d.setClip(clip);
		}
		
		//TODO: Opacity mask
		
		if(canvas.getOpacity() < 0f || canvas.getOpacity() > 1.0f){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		} else {
			if(canvas.getOpacity() < 1.0f){
				g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, (float)canvas.getOpacity()));
			}
		}
	}


	private static String getRenderTransformMatrix(String renderTransform, ITransform canvasRenderTransform, DelegatingResourceDictionary pageResourceDictionary) throws XPSSpecError, XPSError {
		String renderTransformMatrix = null;
		if(canvasRenderTransform != null){
			renderTransformMatrix = canvasRenderTransform.getMatrixTransform().getMatrix();
		} else {
			if(renderTransform != null){
				Object o = dictionaryLookup(pageResourceDictionary, renderTransform);
				if(o != null){
					if(o instanceof ITransformMatrix){
						renderTransform = ((ITransformMatrix)o).getMatrix();
					} else {
						throw new XPSError("Bad type for transform matrix");
					}
				} else {
					renderTransformMatrix = renderTransform;
				}
			}
		}
		return renderTransformMatrix;
	}

	public static Paint createPaintFromBrush(IBrush pathFill, DelegatingResourceDictionary resources,IXPSAccess access, IDocumentReference docRef) throws XPSError {
		//TODO: Handle all brush types
		if(pathFill.getSolidColorBrush() != null){
			return AWTXPSRenderingUtils.createPaintFromShorthand(pathFill.getSolidColorBrush().getColor());
		} else if(pathFill.getImageBrush() != null){
			return createPaintFromImageBrush(pathFill.getImageBrush(), resources, access, docRef);
		} else if(pathFill.getLinearGradientBrush() != null){
			return AWTXPSRenderingUtils.createPaintFromLinearGradientBrush(pathFill.getLinearGradientBrush());
		} else if(pathFill.getVisualBrush() != null){
			return createPaintFromVisualBrush(pathFill.getVisualBrush(), resources, access, docRef);
		} else if(pathFill.getRadialGradientBrush() != null){
			throw new XPSError("Radial Brush Not Implemented");
		}
		return Color.BLACK;
	}
	



	public static Paint createPaintFromBrush(Object o, DelegatingResourceDictionary resources,IXPSAccess access, IDocumentReference docRef) throws XPSError {
		if(o instanceof ISolidColorBrush){
			return AWTXPSRenderingUtils.createPaintFromShorthand(((ISolidColorBrush)o).getColor());
		} else if(o instanceof IImageBrush){
			return createPaintFromImageBrush((IImageBrush)o, resources, access, docRef);
		} else if(o instanceof ILinearGradientBrush){
			return AWTXPSRenderingUtils.createPaintFromLinearGradientBrush((ILinearGradientBrush)o);
		} else if(o instanceof IVisualBrush){
			return createPaintFromVisualBrush((IVisualBrush)o, resources, access, docRef);
		} else if(o instanceof IRadialGradientBrush){
			throw new XPSError("Radial Brush Not Implemented");
		} else {
			throw new XPSError("Resource is not a brush type");
		}
	}


	private static Paint createPaintFromImageBrush(IImageBrush imageBrush, DelegatingResourceDictionary resources, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		if(imageBrush.getImageBrushTransform() != null && imageBrush.getTransform() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		String matrixTransform = null;
		if(imageBrush.getImageBrushTransform() != null){
			matrixTransform = imageBrush.getImageBrushTransform().getMatrixTransform().getMatrix();
		} else if(imageBrush.getTransform() != null){
			matrixTransform = imageBrush.getTransform();
		}
		return AWTXPSRenderingUtils.createPaintFromImageBrush(imageBrush, matrixTransform, access.getFileAccess().getImageResource(imageBrush.getImageSource(), docRef));
	}


	private static Paint createPaintFromVisualBrush(IVisualBrush vb, DelegatingResourceDictionary resources, IXPSAccess access, IDocumentReference docRef) throws XPSSpecError, XPSError {
		if(vb.getTransform() != null && vb.getVisualBrushTransform() != null) {
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		String matrixTransform = null;
		if(vb.getVisualBrushTransform() != null){
			matrixTransform = vb.getVisualBrushTransform().getMatrixTransform().getMatrix();
		} else if(vb.getTransform() != null){
			matrixTransform = vb.getTransform();
		}
		
		return AWTXPSRenderingUtils.createPaintFromVisualBrush(vb, matrixTransform, resources, access, docRef);
	}
	

}
