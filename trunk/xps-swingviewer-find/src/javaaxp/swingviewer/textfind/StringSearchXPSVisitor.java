package javaaxp.swingviewer.textfind;

import javaaxp.core.service.IXPSVisitor;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.FullOrShorthandData;
import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPageResource;
import javaaxp.core.service.model.document.page.IPath;
import javaaxp.core.service.model.document.page.IPathGeometry;

public class StringSearchXPSVisitor implements IXPSVisitor {

	private String fSearchString;
	private boolean fFoundMatch;

	public StringSearchXPSVisitor(String searchString) {
		fSearchString = searchString;
	}

	@Override
	public void postVisitCanvas(ICanvas canvas) {
		// TODO Auto-generated method stub

	}

	@Override
	public void postVisitGlyphs(IGlyphs glyphs) {
		// TODO Auto-generated method stub
		

	}

	@Override
	public void postVisitPage(IFixedPage page) {
		// TODO Auto-generated method stub

	}

	@Override
	public void postVisitPath(IPath path) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean visitCanvas(ICanvas canvas, String renderTransformMatrix) throws XPSError {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public void visitGlyphs(IGlyphs glyphs, FullOrShorthandData<IPageResource> brushData, String renderTransform)
			throws XPSError {
		if(glyphs.getUnicodeString().contains(fSearchString)){
			fFoundMatch = true;
		}
	}

	@Override
	public boolean visitPage(IFixedPage page) throws XPSError {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public void visitPath(IPath path, FullOrShorthandData<IPageResource> fillData,
			FullOrShorthandData<IPageResource> strokeData, FullOrShorthandData<IPathGeometry> pathData,
			String renderTransform) throws XPSSpecError, XPSError {
		// TODO Auto-generated method stub

	}

	public boolean foundString() {
		return fFoundMatch;
	}

}
