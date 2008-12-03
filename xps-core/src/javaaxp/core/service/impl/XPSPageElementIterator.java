package javaaxp.core.service.impl;

import javaaxp.core.service.DelegatingResourceDictionary;
import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSFileAccess;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSVisitor;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPageResourceDictionary;
import javaaxp.core.service.model.document.page.IPath;

public class XPSPageElementIterator extends XPSElementIterator implements IXPSIterator{

	private IFixedPage fPage;
	private IXPSFileAccess fFileAccess;
	private IDocumentReference fDocument;

	public XPSPageElementIterator(IFixedPage page, IXPSFileAccess access, IDocumentReference docRef) throws XPSError {
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
