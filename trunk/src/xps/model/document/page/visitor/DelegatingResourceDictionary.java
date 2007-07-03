package xps.model.document.page.visitor;

import xps.XPSError;
import xps.XPSSpecError;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;
import xps.model.document.page.IPageResource;
import xps.model.document.page.IPageResourceDictionary;

public class DelegatingResourceDictionary {
	private DelegatingResourceDictionary fParent;
	private IPageResourceDictionary fDict;

	
	public static final DelegatingResourceDictionary EMPTY_RESOURCE_DICTIONARY = new DelegatingResourceDictionary(){
		public Object get(String key) throws XPSSpecError{
			return null;
		}
	};
	
	private DelegatingResourceDictionary() {
		fParent = null;
		fDict = null;
	}
	
	public DelegatingResourceDictionary(DelegatingResourceDictionary parent, IPageResourceDictionary dict, XPSZipFileAccess za, IDocumentReference docRef) throws XPSError{
		fParent = parent;

		if(dict != null){
			if(dict.getSource() != null && dict.getImageBrushOrLinearGradientBrushOrRadialGradientBrush() != null){
				throw new XPSSpecError(7,6,"Resource Dictionary references both external file and own children");
			}
			
			if(dict.getSource() != null){
				//read the resource version
				za.getResourceDictionary(dict.getSource(), docRef);
			} else {
				fDict = dict;
			}
		}
	}
	
	public Object get(String key) throws XPSSpecError{
		Object ret = localDictionaryLookup(key);
		if(ret == null){
			if(fParent != null){
				return fParent.get(key);
			} else {
				throw new XPSSpecError(7,1,"Resource named " + key + " not found in page dictionary");
			}
		} else {
			return ret;
		}
	}

	private Object localDictionaryLookup(String key) {
		for (IPageResource pr : fDict.getImageBrushOrLinearGradientBrushOrRadialGradientBrush()) {
			if(pr.getKey().equals(key)){
				return pr;
			}
		}
		return null;
	}
	
	public DelegatingResourceDictionary getParent() {
		return fParent;
	}

}
