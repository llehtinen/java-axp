package xps.api;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import xps.api.util.DelegatingResourceDictionary;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;
import xps.model.document.page.IBrush;
import xps.model.document.page.ICanvas;
import xps.model.document.page.IFixedPage;
import xps.model.document.page.IGeometry;
import xps.model.document.page.IGlyphs;
import xps.model.document.page.IImageBrush;
import xps.model.document.page.ILinearGradientBrush;
import xps.model.document.page.IPageResource;
import xps.model.document.page.IPath;
import xps.model.document.page.IPathGeometry;
import xps.model.document.page.IRadialGradientBrush;
import xps.model.document.page.ISolidColorBrush;
import xps.model.document.page.ITransform;
import xps.model.document.page.ITransformMatrix;
import xps.model.document.page.IVisualBrush;

public class XPSElementIterator {
	
	
	private static final Pattern RESOURCE_REFERENCE_PATTERN = Pattern.compile("\\{StaticResource (.*)\\}");
	
	private DelegatingResourceDictionary fPageResourceDictionary;
	private IFixedPage fPage;
	private XPSZipFileAccess fFileAccess;
	private IDocumentReference fDocument;

	
	public XPSElementIterator(IFixedPage page, XPSZipFileAccess access, IDocumentReference docRef) throws XPSError{
		fPage = page;
		fFileAccess = access;
		fDocument = docRef;
		
		if(page.getFixedPageResources() != null) {
			fPageResourceDictionary = new DelegatingResourceDictionary(null, page.getFixedPageResources().getResourceDictionary(),access, docRef);
		} else {
			fPageResourceDictionary = DelegatingResourceDictionary.EMPTY_RESOURCE_DICTIONARY;
		}

	}
	
	public void accept(IXPSVisitor v) throws XPSError{
		try {
			boolean b = v.visitPage(fPage);
			
			if(b){
				for(Object o : fPage.getPathOrGlyphsOrCanvas()){
					if(o instanceof IPath){
						accept(v, (IPath)o);
					} else if(o instanceof IGlyphs){
						accept(v, (IGlyphs)o);
					} else if(o instanceof ICanvas){
						accept(v, (ICanvas)o);
					}
				}
			}
		} finally {
			v.postVisitPage(fPage);
		}
	}

	private void accept(IXPSVisitor v, ICanvas canvas) throws XPSError {
		if(canvas.getCanvasResources() != null){
			fPageResourceDictionary = new DelegatingResourceDictionary(fPageResourceDictionary, canvas.getCanvasResources().getResourceDictionary(), fFileAccess, fDocument);
		}

		try {
			String renderTransformMatrix = getRenderTransformMatrix(canvas.getRenderTransform(), canvas.getCanvasRenderTransform());
			
			boolean b = v.visitCanvas(canvas,renderTransformMatrix);
			if(b){
				for (Object o : canvas.getPathOrGlyphsOrCanvas()) {
					if(o instanceof IPath){
						accept(v, (IPath)o);
					} else if(o instanceof IGlyphs){
						accept(v, (IGlyphs)o);
					} else if(o instanceof ICanvas){
						accept(v, (ICanvas)o);
					}
				}
			}
		} finally {
			v.postVisitCanvas(canvas);
			if(canvas.getCanvasResources() != null){
				fPageResourceDictionary = fPageResourceDictionary.getParent();
			}
		}
	}

	private void accept(IXPSVisitor v, IGlyphs glyphs) throws XPSError {
		if(glyphs.getFill() != null && glyphs.getGlyphsFill() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");   
		}
		FullOrShorthandData<IPageResource> brushData = getBrush(glyphs.getFill(), glyphs.getGlyphsFill());
		
		try {
			v.visitGlyphs(glyphs, brushData,getRenderTransformMatrix(glyphs.getRenderTransform(), glyphs.getGlyphsRenderTransform()));
		} finally {
			v.postVisitGlyphs(glyphs);
		}
	}

	private void accept(IXPSVisitor v, IPath path) throws XPSError {
		//The path can be filled by either an IBrush delegating type, or a text-specified path
		
		if(path.getFill() != null && path.getPathFill() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");   
		}
		
		if(path.getStroke() != null && path.getPathStroke() != null){
			throw new XPSSpecError(2,74, "Duplicate definition of property");   
		}

		
		FullOrShorthandData<IPageResource> fillBrushData = getBrush(path.getFill(), path.getPathFill());
		FullOrShorthandData<IPageResource> strokeBrushData = getBrush(path.getStroke(), path.getPathStroke());
		FullOrShorthandData<IPathGeometry> pathData = getPath(path.getData(), path.getPathData());
		
		try {
			v.visitPath(path, fillBrushData, strokeBrushData, pathData, getRenderTransformMatrix(path.getRenderTransform(), path.getPathRenderTransform()));
		} finally {
			v.postVisitPath(path);
		}
		
	}
	
	private FullOrShorthandData<IPathGeometry> getPath(String data, IGeometry pathData) throws XPSSpecError, XPSError {
		if(data != null){
			Object o = dictionaryLookup(data);
			if(o == null){
				return new FullOrShorthandData<IPathGeometry>(data, null);
			} else {
				return new FullOrShorthandData<IPathGeometry>(null, (IPathGeometry)o);
				
			}
		} else {
			return new FullOrShorthandData<IPathGeometry>(null, pathData.getPathGeometry());
		}
	}

	private FullOrShorthandData<IPageResource> getBrush(String brushShorthand, IBrush pathFill) throws XPSError {
		if(brushShorthand != null){
			IPageResource brush = getBrushFromResourceDictionary(fPageResourceDictionary, brushShorthand);
			if(brush == null){
				return new FullOrShorthandData<IPageResource>(brushShorthand, null);
			} else {
				return new FullOrShorthandData<IPageResource>(null, brush);
				
			}
		} else if(pathFill != null){
			return new FullOrShorthandData<IPageResource>(null, resolveBrushType(pathFill));
		} else {
			return null;
		}
	}
	
	private IPageResource resolveBrushType(IBrush pathFill) throws XPSError {
		//TODO: Handle all brush types
		if(pathFill.getSolidColorBrush() != null){
			return pathFill.getSolidColorBrush();
		} else if(pathFill.getImageBrush() != null){
			return pathFill.getImageBrush();
		} else if(pathFill.getLinearGradientBrush() != null){
			return pathFill.getLinearGradientBrush();
		} else if(pathFill.getVisualBrush() != null){
			return pathFill.getVisualBrush();
		} else if(pathFill.getRadialGradientBrush() != null){
			return pathFill.getVisualBrush();
		} else {
			throw new XPSError("Invalid brush type");
		}
	}
	
	private IPageResource getBrushFromResourceDictionary(DelegatingResourceDictionary dict, String key) throws XPSError {
		Object o = dictionaryLookup(key);
		if(o != null){
			if(
					o instanceof ISolidColorBrush ||
					o instanceof IImageBrush ||
					o instanceof ILinearGradientBrush ||
					o instanceof IVisualBrush ||
					o instanceof IRadialGradientBrush 
			){
				return (IPageResource)o;
			} else {
				throw new XPSError("Resource is not a brush type");
			}
		} else {
			return null;
		}
	}
	
	private Object dictionaryLookup(String s) throws XPSSpecError, XPSError {
		Matcher m = RESOURCE_REFERENCE_PATTERN.matcher(s);
		
		Object o = null;
		if(m.matches()){
			String key = m.group(1);
			o = fPageResourceDictionary.get(key);
			if(o == null){
				throw new XPSError("Dictionary key not found");
			}
		}
		return o;
	}
	
	private String getRenderTransformMatrix(String renderTransform, ITransform canvasRenderTransform) throws XPSSpecError, XPSError {
		String renderTransformMatrix = null;
		if(canvasRenderTransform != null){
			renderTransformMatrix = canvasRenderTransform.getMatrixTransform().getMatrix();
		} else {
			if(renderTransform != null){
				Object o = dictionaryLookup(renderTransform);
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

	public static class FullOrShorthandData<T>{
		public final T fFull;
		public final String fShorthand;

		public FullOrShorthandData(String shorthand, T full){
			fFull = full;
			fShorthand = shorthand;
		}
	}

}
