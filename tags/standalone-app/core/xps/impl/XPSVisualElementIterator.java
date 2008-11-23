package xps.impl;

import xps.api.IXPSVisitor;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.page.IPageResourceDictionary;
import xps.api.model.document.page.IVisual;
import xps.api.model.document.page.IVisualBrush;
import xps.api.util.DelegatingResourceDictionary;

public class XPSVisualElementIterator extends XPSElementIterator {

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
