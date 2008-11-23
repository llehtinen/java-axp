package xps.impl;

import xps.api.IXPSAccess;
import xps.api.IXPSVisitor;
import xps.api.XPSError;
import xps.api.model.document.IDocumentReference;
import xps.api.model.document.page.ICanvas;
import xps.api.model.document.page.IFixedPage;
import xps.api.model.document.page.IGlyphs;
import xps.api.model.document.page.IPageResourceDictionary;
import xps.api.model.document.page.IPath;
import xps.api.util.DelegatingResourceDictionary;

public class XPSPageElementIterator extends XPSElementIterator {

	private IFixedPage fPage;
	private IXPSAccess fFileAccess;
	private IDocumentReference fDocument;

	public XPSPageElementIterator(IFixedPage page, IXPSAccess access, IDocumentReference docRef) throws XPSError {
		super();
		fFileAccess = access;
		fDocument = docRef;
		fPage = page;
	}

	@Override
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

	protected DelegatingResourceDictionary loadResourceDictionary(IPageResourceDictionary resourceDictionary) throws XPSError {
		return new DelegatingResourceDictionary(fPageResourceDictionary,resourceDictionary,fFileAccess, fDocument);
	}

}
