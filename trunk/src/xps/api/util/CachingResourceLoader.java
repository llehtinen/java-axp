package xps.api.util;

import java.util.HashMap;
import java.util.Map;

import xps.api.XPSError;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;

public abstract class CachingResourceLoader<T> {
	private XPSZipFileAccess fFileAccess;
	private IDocumentReference fDocument;
	private Map<String, T> fCache = new HashMap<String, T>();

	public CachingResourceLoader(IDocumentReference docRef, XPSZipFileAccess access){
		fFileAccess = access;
		fDocument = docRef;
	}

	public IDocumentReference getDocument() {
		return fDocument;
	}

	public XPSZipFileAccess getFileAccess() {
		return fFileAccess;
	}
	
	public T load(String uri) throws XPSError {
		T t = fCache .get(uri);
		if(t == null){
			try {
				t = loadData(uri);
				fCache.put(uri, t);
			}catch  (Exception e) {
				throw new XPSError(e);		
			}
		}
		
		return t;
	}
	
	
	protected abstract T loadData(String uri) throws Exception;
	
	

}
