package xps.impl.ui.rendering;

import java.awt.AlphaComposite;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.geom.Rectangle2D;
import java.util.Stack;

import xps.XPSError;
import xps.XPSSpecError;
import xps.impl.ui.rendering.brushes.AWTXPSPaint;
import xps.impl.ui.rendering.brushes.XPSImagePaint;
import xps.model.document.page.IBrush;
import xps.model.document.page.ICanvas;
import xps.model.document.page.IFixedPage;
import xps.model.document.page.IGlyphs;
import xps.model.document.page.IImageBrush;
import xps.model.document.page.ILinearGradientBrush;
import xps.model.document.page.IPageResource;
import xps.model.document.page.IPath;
import xps.model.document.page.IPathGeometry;
import xps.model.document.page.IRadialGradientBrush;
import xps.model.document.page.ISolidColorBrush;
import xps.model.document.page.IVisualBrush;
import xps.model.document.page.visitor.XPSVisitor;
import xps.model.document.page.visitor.XPSElementIterator.FullOrShorthandData;

public class SwingXPSRenderer implements XPSVisitor{

	private Stack<Graphics2D> fGraphicsStack;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;

	public SwingXPSRenderer(FontLoader fontLoader, ImageLoader imageLoader, Graphics2D g2){
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fGraphicsStack = new Stack<Graphics2D>();
		fGraphicsStack.push(g2);
	}
	
	
	public void postVisitPage(IFixedPage page) {
		fGraphicsStack.pop();
	}

	public boolean visitPage(IFixedPage page) throws XPSError {
		Graphics2D g2 = (Graphics2D)fGraphicsStack.peek().create();
		fGraphicsStack.push(g2);
		applyGraphicsProperties(page);
		return true;
	}
	
	private void applyGraphicsProperties(IFixedPage page) throws XPSError {
		fGraphicsStack.peek().setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		
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
		
		fGraphicsStack.peek().drawRect((int)r.getX(), (int)r.getY(), (int)r.getWidth(), (int)r.getHeight());
		fGraphicsStack.peek().setClip((int)r.getX(), (int)r.getY(), (int)r.getWidth(), (int)r.getHeight());
	}
	
	private void applyGraphicsProperties(IGlyphs glyphs, String renderTransformMatrix) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((glyphs.getGlyphsRenderTransform() != null && glyphs.getRenderTransform() != null) ||
		   (glyphs.getGlyphsClip() != null && glyphs.getClip() != null) ||
		   (glyphs.getGlyphsOpacityMask() != null && glyphs.getOpacityMask() != null) 
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		
		if(renderTransformMatrix != null){
			fGraphicsStack.peek().transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
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
			fGraphicsStack.peek().setClip(clip);
		}
	}
	
	private void applyGraphicsProperties(IPath path, String renderTransformMatrix) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((path.getPathRenderTransform() != null && path.getRenderTransform() != null) ||
		   (path.getPathClip() != null && path.getClip() != null) ||
		   (path.getPathOpacityMask() != null && path.getOpacityMask() != null) ||
		   (path.getPathData() != null && path.getData() != null)
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		if(renderTransformMatrix != null){
			fGraphicsStack.peek().transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
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
			fGraphicsStack.peek().setClip(clip);
		} 
		
		
		if(path.getPathOpacityMask() != null && path.getOpacityMask() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		//handle stroke
		BasicStroke s = AWTXPSRenderingUtils.getStroke(path.getStrokeDashArray(), path.getStrokeDashCap(), path.getStrokeDashOffset(), 
				path.getStrokeEndLineCap(), path.getStrokeLineJoin(), path.getStrokeMiterLimit(), path.getStrokeThickness());  
		fGraphicsStack.peek().setStroke(s);
		
	}
	
	private void applyGraphicsProperties(ICanvas canvas, String renderTransformMatrix) throws XPSError {
		//potential dupe properties: canvas.RenderTransform, canvas.Clip, canvas.opacityMask, 
		if((canvas.getRenderTransform() != null && canvas.getCanvasRenderTransform() != null) ||
		   (canvas.getCanvasClip() != null && canvas.getClip() != null) ||
		   (canvas.getCanvasOpacityMask() != null && canvas.getOpacityMask() != null)
		){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		if(renderTransformMatrix != null){
			fGraphicsStack.peek().transform(AWTXPSRenderingUtils.createAffineTransform(renderTransformMatrix));
		}
		
		
		Shape clip = null;
		if(canvas.getCanvasClip()!= null){
			clip = AWTXPSRenderingUtils.createShapeFromPathGeometry(canvas.getCanvasClip().getPathGeometry());
		}
		if(clip == null && canvas.getClip() != null){
			clip = AWTXPSRenderingUtils.createShapeFromShorthandCommands(canvas.getClip(), true);
		}
		if(clip != null){
			fGraphicsStack.peek().setClip(clip);
		}
		
		//TODO: Opacity mask
		
		if(canvas.getOpacity() < 0f || canvas.getOpacity() > 1.0f){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		} else {
			if(canvas.getOpacity() < 1.0f){
				fGraphicsStack.peek().setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, (float)canvas.getOpacity()));
			}
		}
		
	}


	public void visitGlyphs(IGlyphs glyphs, FullOrShorthandData<IPageResource> brushData, String renderTransform) throws XPSError {
		Graphics2D g2 = (Graphics2D)fGraphicsStack.peek().create();
		fGraphicsStack.push(g2);
		applyGraphicsProperties(glyphs, renderTransform);
		
		Font f = fFontLoader.load(glyphs.getFontUri());
		fGraphicsStack.peek().setFont(f);
		
		fGraphicsStack.peek().translate(glyphs.getOriginX(), glyphs.getOriginY());
		fGraphicsStack.peek().scale(glyphs.getFontRenderingEmSize(), glyphs.getFontRenderingEmSize());
		
		AWTXPSPaint fillPaint = createPaint(brushData);
		
		if(glyphs.getOpacityMask() != null){
			applyOpacityMask(fillPaint, null, glyphs.getGlyphsOpacityMask(), glyphs.getOpacityMask());
		}
		

		fGraphicsStack.peek().setPaint(fillPaint);
		fGraphicsStack.peek().drawString(glyphs.getUnicodeString(), 0, 0);

	}
	
	private AWTXPSPaint createPaint(FullOrShorthandData<IPageResource> brushData) throws XPSError {
		if(brushData == null){
			return null;
		} else  if(brushData.fShorthand != null){
			return AWTXPSRenderingUtils.createPaintFromShorthand(brushData.fShorthand);
		} else {
			if(brushData.fFull instanceof ISolidColorBrush){
				return AWTXPSRenderingUtils.createPaintFromShorthand(((ISolidColorBrush)brushData.fFull).getColor());
			} else if(brushData.fFull instanceof IImageBrush){
				return createPaintFromImageBrush((IImageBrush)brushData.fFull);
			} else if(brushData.fFull instanceof ILinearGradientBrush){
				return AWTXPSRenderingUtils.createPaintFromLinearGradientBrush((ILinearGradientBrush)brushData.fFull);
			} else if(brushData.fFull instanceof IVisualBrush){
				return createPaintFromVisualBrush((IVisualBrush)brushData.fFull);
			} else if(brushData.fFull instanceof IRadialGradientBrush){
				throw new XPSError("Radial Brush Not Implemented");
			} else {
				throw new XPSError("Resource is not a brush type");
			}
		}
	}


	public void postVisitGlyphs(IGlyphs glyphs) {
		fGraphicsStack.pop();	
	}


	public void postVisitPath(IPath path) {
		fGraphicsStack.pop();	
	}
	
	public void postVisitCanvas(ICanvas canvas) {
		fGraphicsStack.pop();	
	}


	public boolean visitCanvas(ICanvas canvas, String renderTransformMatrix) throws XPSError {
		Graphics2D g2 = (Graphics2D)fGraphicsStack.peek().create();
		fGraphicsStack.push(g2);
		applyGraphicsProperties(canvas, renderTransformMatrix);
		return true;
	}

	public void visitPath(IPath path, FullOrShorthandData<IPageResource> fillData, FullOrShorthandData<IPageResource> strokeData,FullOrShorthandData<IPathGeometry> pathData, String renderTransform) throws XPSSpecError, XPSError {
		Graphics2D g2 = (Graphics2D)fGraphicsStack.peek().create();
		fGraphicsStack.push(g2);
		applyGraphicsProperties(path, renderTransform);

		
		AWTXPSPaint fillPaint = createPaint(fillData);
		AWTXPSPaint drawPaint = createPaint(strokeData);

		if(path.getPathOpacityMask() != null){
			applyOpacityMask(fillPaint, drawPaint, path.getPathOpacityMask(), path.getOpacityMask());
		} else if(path.getOpacity() < 0f || path.getOpacity() > 1.0f){
			throw new XPSSpecError(2,74, "Invalid opacity");
		} else {
			if(path.getOpacity() < 1.0f){
				fGraphicsStack.peek().setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, (float)path.getOpacity()));
			}
		}
		
		renderPathData(fillPaint, drawPaint, pathData);	
	}


	private void applyOpacityMask(AWTXPSPaint fillPaint, AWTXPSPaint drawPaint, IBrush opacityMaskBrush, String opacityMaskShorthand) throws XPSError {
		IPageResource pr = null;
		if(opacityMaskBrush.getImageBrush() != null){
			pr = opacityMaskBrush.getImageBrush();
		} else if(opacityMaskBrush.getLinearGradientBrush() != null){
			pr = opacityMaskBrush.getLinearGradientBrush();
		} else if(opacityMaskBrush.getRadialGradientBrush() != null){
			pr = opacityMaskBrush.getRadialGradientBrush();
		} else if(opacityMaskBrush.getSolidColorBrush() != null){
			pr = opacityMaskBrush.getSolidColorBrush();
		} else if(opacityMaskBrush.getVisualBrush() != null){
			pr = opacityMaskBrush.getVisualBrush();
		}
		FullOrShorthandData<IPageResource> opacityMaskData = new FullOrShorthandData<IPageResource>(opacityMaskShorthand, pr);
		
		Paint blendingFillPaint = createPaint(opacityMaskData);
		if(fillPaint != null){
			fillPaint.setOpacityMaskPaint(blendingFillPaint);	
		}
		
		if(drawPaint != null){
			drawPaint.setOpacityMaskPaint(blendingFillPaint);	
		}
	}

	private void renderPathData(Paint fillPaint, Paint drawPaint, FullOrShorthandData<IPathGeometry> pathData) throws XPSError {
		Shape s;
		if(pathData.fFull != null){
			s = AWTXPSRenderingUtils.createShapeFromPathGeometry(pathData.fFull); 
		} else {
			s = AWTXPSRenderingUtils.createShapeFromShorthandCommands(pathData.fShorthand, true);
		}
		
		if(fillPaint != null){
			fGraphicsStack.peek().setPaint(fillPaint);
			fGraphicsStack.peek().fill(s);
		}

		if(drawPaint != null){
			fGraphicsStack.peek().setPaint(drawPaint);
			fGraphicsStack.peek().draw(s);
		}	
	}
	
	private AWTXPSPaint createPaintFromVisualBrush(IVisualBrush brush) throws XPSSpecError {
		if(brush.getTransform() != null && brush.getVisualBrushTransform() != null) {
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		String matrixTransform = null;
		if(brush.getVisualBrushTransform() != null){
			matrixTransform = brush.getVisualBrushTransform().getMatrixTransform().getMatrix();
		} else if(brush.getTransform() != null){
			matrixTransform = brush.getTransform();
		}
		
		
		//TODO: Need to adapt AWTXPSRenderingUtils.createPaintFromVisualBrush
		return null;
//		return AWTXPSRenderingUtils.createPaintFromVisualBrush(brush, matrixTransform);
	}
	
	private XPSImagePaint createPaintFromImageBrush(IImageBrush brush) throws XPSError {
		if(brush.getImageBrushTransform() != null && brush.getTransform() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		String matrixTransform = null;
		if(brush.getImageBrushTransform() != null){
			matrixTransform = brush.getImageBrushTransform().getMatrixTransform().getMatrix();
		} else if(brush.getTransform() != null){
			matrixTransform = brush.getTransform();
		}
		return AWTXPSRenderingUtils.createPaintFromImageBrush(brush, matrixTransform, fImageLoader.load(brush.getImageSource()));
	}




}

