/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer.service.impl.rendering;

import java.awt.AlphaComposite;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.GradientPaint;
import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.font.GlyphVector;
import java.awt.geom.AffineTransform;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.util.List;
import java.util.Stack;
import java.util.Vector;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSVisitor;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.FullOrShorthandData;
import javaaxp.core.service.model.document.page.IBrush;
import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IGradientStop;
import javaaxp.core.service.model.document.page.IImageBrush;
import javaaxp.core.service.model.document.page.ILinearGradientBrush;
import javaaxp.core.service.model.document.page.IPageResource;
import javaaxp.core.service.model.document.page.IPath;
import javaaxp.core.service.model.document.page.IPathGeometry;
import javaaxp.core.service.model.document.page.IRadialGradientBrush;
import javaaxp.core.service.model.document.page.ISolidColorBrush;
import javaaxp.core.service.model.document.page.IVisualBrush;
import javaaxp.core.service.model.document.page.STDashCap;
import javaaxp.core.service.model.document.page.STLineCap;
import javaaxp.core.service.model.document.page.STLineJoin;
import javaaxp.swingviewer.IXPSRenderingExtension;
import javaaxp.swingviewer.service.impl.rendering.GlyphIndicesParser.GlyphIndicesEntry;
import javaaxp.swingviewer.service.impl.viewer.brushes.AWTXPSImagePaint;
import javaaxp.swingviewer.service.impl.viewer.brushes.AWTXPSPaint;
import javaaxp.swingviewer.service.impl.viewer.brushes.AWTXPSPaintWrapper;
import javaaxp.swingviewer.service.impl.viewer.brushes.AWTXPSVisualPaint;
import javaaxp.swingviewer.service.impl.viewer.brushes.SolidColourAWTXPSPaint;

public class AWTXPSRenderer implements IXPSVisitor{

	private Stack<Graphics2D> fGraphicsStack;
	private FontLoader fFontLoader;
	private ImageLoader fImageLoader;
	private IXPSAccess fXPSAccess;
	private Vector<IXPSRenderingExtension> fRenderingExtensions;

	public AWTXPSRenderer(FontLoader fontLoader, ImageLoader imageLoader, Graphics2D g2, IXPSAccess access, Vector<IXPSRenderingExtension> renderingExtensions){
		fFontLoader = fontLoader;
		fImageLoader = imageLoader;
		fGraphicsStack = new Stack<Graphics2D>();
		fGraphicsStack.push(g2);
		fXPSAccess = access;
		fRenderingExtensions = renderingExtensions;
	}
	
	
	public void postVisitPage(IFixedPage page) {
		for (IXPSRenderingExtension ext : fRenderingExtensions) {
			ext.renderedPage(page, fGraphicsStack.peek());
		}

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
		BasicStroke s = createStroke(path.getStrokeDashArray(), path.getStrokeDashCap(), path.getStrokeDashOffset(), 
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
				fGraphicsStack.peek().setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, (float)canvas.getOpacity()));
			}
		}
	}


	public void postVisitGlyphs(IGlyphs glyphs) {
		for (IXPSRenderingExtension ext : fRenderingExtensions) {
			ext.renderedGlyphs(glyphs, fGraphicsStack.peek());
		}
		fGraphicsStack.pop();	
	}
	
	public void visitGlyphs(IGlyphs glyphs, FullOrShorthandData<IPageResource> brushData, String renderTransform) throws XPSError {
		Graphics2D g2 = (Graphics2D)fGraphicsStack.peek().create();
		fGraphicsStack.push(g2);
		applyGraphicsProperties(glyphs, renderTransform);
		
		Font f = fFontLoader.load(glyphs.getFontUri());
		f = f.deriveFont((float)glyphs.getFontRenderingEmSize());
		fGraphicsStack.peek().setFont(f);

		
		fGraphicsStack.peek().translate(glyphs.getOriginX(), glyphs.getOriginY());
		
		
		AWTXPSPaint fillPaint = createPaint(brushData);
		
		if(glyphs.getOpacityMask() != null){
			applyOpacityMask(fillPaint, null, glyphs.getGlyphsOpacityMask(), glyphs.getOpacityMask());
		}
		
//		System.out.println(glyphs.getIndices());
		fGraphicsStack.peek().setPaint(fillPaint);		

		if(glyphs.getIndices() == null){
			fGraphicsStack.peek().drawString(glyphs.getUnicodeString(), 0, 0);	
		} else {
			GlyphVector gv = f.createGlyphVector(fGraphicsStack.peek().getFontRenderContext(), glyphs.getUnicodeString());
			GlyphIndicesEntry entries[] = new GlyphIndicesParser().parse(glyphs.getIndices());
			for(int i = 0; i < entries.length; i++){
				GlyphIndicesEntry entry = entries[i];
				if(entry.fGlyphMetrics != null && entry.fGlyphMetrics.fAdvance != null){
					if(i < gv.getNumGlyphs() - 1){
						gv.setGlyphPosition(i + 1, new Point2D.Double(gv.getGlyphPosition(i).getX() + entry.fGlyphMetrics.fAdvance * glyphs.getFontRenderingEmSize() / 100 , gv.getGlyphPosition(i).getY()));
					}
				}
				//uoffset is a horizontal shift relative to the current origin (calculated from origin of previous glyph plus the advance of the previous glyph)
				if(entry.fGlyphMetrics.fUOffset != null){
					double xTranslate = entry.fGlyphMetrics.fUOffset * glyphs.getFontRenderingEmSize() / 100;
					double yTranslate = (entry.fGlyphMetrics.fVOffset == null ? 0 :  entry.fGlyphMetrics.fVOffset * glyphs.getFontRenderingEmSize() / 100);
					gv.setGlyphTransform(i, AffineTransform.getTranslateInstance(xTranslate, yTranslate));
				}
			}
			fGraphicsStack.peek().fill(gv.getOutline());
		}
	}
	
	private AWTXPSPaint createPaint(FullOrShorthandData<IPageResource> brushData) throws XPSError {
		if(brushData == null){
			return null;
		} else  if(brushData.fShorthand != null){
			return createPaintFromShorthand(brushData.fShorthand);
		} else {
			if(brushData.fFull instanceof ISolidColorBrush){
				return createPaintFromShorthand(((ISolidColorBrush)brushData.fFull).getColor());
			} else if(brushData.fFull instanceof IImageBrush){
				return createPaintFromImageBrush((IImageBrush)brushData.fFull);
			} else if(brushData.fFull instanceof ILinearGradientBrush){
				return createPaintFromLinearGradientBrush((ILinearGradientBrush)brushData.fFull);
			} else if(brushData.fFull instanceof IVisualBrush){
				return createPaintFromVisualBrush((IVisualBrush)brushData.fFull);
			} else if(brushData.fFull instanceof IRadialGradientBrush){
				throw new XPSError("Radial Brush Not Implemented");
			} else {
				throw new XPSError("Resource is not a brush type");
			}
		}
	}





	public void postVisitPath(IPath path) {
		for (IXPSRenderingExtension ext : fRenderingExtensions) {
			ext.renderedPath(path, fGraphicsStack.peek());
		}

		fGraphicsStack.pop();	
	}
	
	public void postVisitCanvas(ICanvas canvas) {
		for (IXPSRenderingExtension ext : fRenderingExtensions) {
			ext.renderedCanvas(canvas, fGraphicsStack.peek());
		}

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
				fGraphicsStack.peek().setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, (float)path.getOpacity()));
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
	
	private AWTXPSPaint createPaintFromVisualBrush(IVisualBrush brush) throws XPSError {
		if(brush.getTransform() != null && brush.getVisualBrushTransform() != null) {
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		
		String matrixTransform = null;
		if(brush.getVisualBrushTransform() != null){
			matrixTransform = brush.getVisualBrushTransform().getMatrixTransform().getMatrix();
		} else if(brush.getTransform() != null){
			matrixTransform = brush.getTransform();
		}

		final AffineTransform at;
		if(matrixTransform != null){
			at = AWTXPSRenderingUtils.createAffineTransform(matrixTransform);
		} else {
			at = new AffineTransform();
		}

		
		Rectangle2D locationOfFirstTileToRender = AWTXPSRenderingUtils.createRectangle(brush.getViewport());
		
		
		return new AWTXPSVisualPaint(locationOfFirstTileToRender, brush, fFontLoader, fImageLoader, at, fXPSAccess);
	}
	
	private AWTXPSPaint createPaintFromImageBrush(IImageBrush brush) throws XPSError {
		if(brush.getImageBrushTransform() != null && brush.getTransform() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");
		}
		String matrixTransform = null;
		if(brush.getImageBrushTransform() != null){
			matrixTransform = brush.getImageBrushTransform().getMatrixTransform().getMatrix();
		} else if(brush.getTransform() != null){
			matrixTransform = brush.getTransform();
		}
		final AffineTransform at;
		if(matrixTransform != null){
			at = AWTXPSRenderingUtils.createAffineTransform(matrixTransform);
		} else {
			at = new AffineTransform();
		}
		
		//TODO: Take into account viewbox - for stretching, and for using a subimage of the source image
		return new AWTXPSImagePaint(fImageLoader.load(brush.getImageSource()), brush, at);
	}


	private AWTXPSPaint createPaintFromLinearGradientBrush(ILinearGradientBrush brush) throws XPSSpecError {
		Point2D start = AWTXPSRenderingUtils.createPoint(brush.getStartPoint());
		Point2D end = AWTXPSRenderingUtils.createPoint(brush.getEndPoint());
		//TODO: Handle more than 2 gradient stops
		//TODO: Handle transform of gradient
		//TODO: Handle transform of linear gradient brushes
		
		
		
		List<? extends IGradientStop> stops = brush.getLinearGradientBrushGradientStops().getGradientStop();
		if(stops.size() >= 2){
			IGradientStop s1 = stops.get(0);
			IGradientStop s2 = stops.get(1);
			return new AWTXPSPaintWrapper(new GradientPaint(start,AWTXPSRenderingUtils.parseColourString(s1.getColor()), end, AWTXPSRenderingUtils.parseColourString(s2.getColor())));
	
		} else {
			throw new XPSSpecError(6,5,"Must have at least 2 gradient stops");
		}
	}


	private AWTXPSPaint createPaintFromShorthand(String fill) {
		fill = fill.trim();
		Color c = AWTXPSRenderingUtils.parseColourString(fill);
		if(c == null){
			c = Color.BLACK;	
		}
		
		return new SolidColourAWTXPSPaint(c);
	}


	private BasicStroke createStroke(String strokeDashArray, STDashCap strokeDashCap, double strokeDashOffset, STLineCap strokeEndLineCap, STLineJoin strokeLineJoin, double strokeMiterLimit, double strokeThickness) {
		if(strokeDashArray != null){
			String dashes[] = strokeDashArray.split("\\s");
			float dashArray[] = new float[dashes.length];
			for (int i = 0; i < dashArray.length; i++) {
				dashArray[i] = Float.parseFloat(dashes[i]);
			}
			return new BasicStroke((float)strokeThickness, AWTXPSRenderingUtils.getDashCapType(strokeDashCap), AWTXPSRenderingUtils.getJoinType(strokeLineJoin),(float)strokeMiterLimit,dashArray, (float)strokeDashOffset);
		} else {
			return new BasicStroke((float)strokeThickness, AWTXPSRenderingUtils.getDashCapType(strokeDashCap), AWTXPSRenderingUtils.getJoinType(strokeLineJoin),(float)strokeMiterLimit);
		}
	}
}

