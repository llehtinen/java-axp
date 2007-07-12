package xps.api.util;

import java.util.HashMap;
import java.util.Map;

import xps.api.IXPSAccess;
import xps.api.IXPSFileAccess;
import xps.api.XPSError;
import xps.api.model.document.IDocumentReference;
import xps.impl.zipfileaccess.XPSZipFileAccess;

public abstract class CachingResourceLoader<T> {
	private IXPSFileAccess fFileAccess;
	private IDocumentReference fDocument;
	private Map<String, T> fCache = new HashMap<String, T>();

	public CachingResourceLoader(IDocumentReference docRef, IXPSAccess access) {
		fFileAccess = access.getFileAccess();
		fDocument = docRef;
	}

	public IDocumentReference getDocument() {
		return fDocument;
	}

	public IXPSFileAccess getFileAccess() {
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
