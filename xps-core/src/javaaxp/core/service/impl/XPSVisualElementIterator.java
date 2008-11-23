package javaaxp.core.service.impl;

import javaaxp.core.service.DelegatingResourceDictionary;
import javaaxp.core.service.IXPSIterator;
import javaaxp.core.service.IXPSVisitor;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.page.IPageResourceDictionary;
import javaaxp.core.service.model.document.page.IVisual;
import javaaxp.core.service.model.document.page.IVisualBrush;

public class XPSVisualElementIterator extends XPSElementIterator implements IXPSIterator {

	private IVisualBrush fVisual;

	public XPSVisualElementIterator(IVisualBrush visualBrush) throws XPSError {
		super();
		fVisual = visualBrush;
	}

	public void accept(IXPSVisitor v) throws XPSError {
		IVisual visual = null;
		if(fVisual.getVisualBrushVisual() != null){
			visual = fVisual.getVisualBrushVisual();
		} else if(fVisual.getVisual() != null){
			visual = (IVisual)dictionaryLookup(fVisual.getVisual());
		} 
		
		if(visual == null){
			throw new XPSSpecError(6,4,"Visual Brush has no visual defined");
		}
		
		
		if(visual.getCanvas() != null){
			accept(v, visual.getCanvas());
		} else if(visual.getPath() != null){
			accept(v, visual.getPath());
		} else if(visual.getGlyphs() != null){
			accept(v, visual.getGlyphs());
		}
	}

	protected DelegatingResourceDictionary loadResourceDictionary(IPageResourceDictionary resourceDictionary) throws XPSError {
		//TODO: Proper resource dictionary propagation to visual brushes
		return fPageResourceDictionary;
	}

}
