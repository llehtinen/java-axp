package xps.model.document.page.visitor;

import xps.XPSError;
import xps.XPSSpecError;
import xps.model.document.page.ICanvas;
import xps.model.document.page.IFixedPage;
import xps.model.document.page.IGlyphs;
import xps.model.document.page.IPageResource;
import xps.model.document.page.IPath;
import xps.model.document.page.IPathGeometry;
import xps.model.document.page.visitor.XPSElementIterator.FullOrShorthandData;

public interface XPSVisitor {

	boolean visitPage(IFixedPage page) throws XPSError;
	void postVisitPage(IFixedPage page);
	
	void visitPath(IPath path, FullOrShorthandData<IPageResource> fillData, FullOrShorthandData<IPageResource> strokeData, FullOrShorthandData<IPathGeometry> pathData, String renderTransform) throws XPSSpecError, XPSError;
	void postVisitPath(IPath path);
	
	
	void visitGlyphs(IGlyphs glyphs, FullOrShorthandData<IPageResource> brushData, String renderTransform) throws XPSError;
	void postVisitGlyphs(IGlyphs glyphs);
	
	
	boolean visitCanvas(ICanvas canvas, String renderTransformMatrix) throws XPSError;
	void postVisitCanvas(ICanvas canvas);

}
