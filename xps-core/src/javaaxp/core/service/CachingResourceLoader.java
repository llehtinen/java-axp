package javaaxp.core.service;

import java.util.HashMap;
import java.util.Map;



public abstract class CachingResourceLoader<T> {
	private Map<String, T> fCache = new HashMap<String, T>();

	public CachingResourceLoader() {
	}

	public T load(String uri) throws XPSError {
		T t = fCache .get(uri);
		if(t == null){
			try {
				t = loadResource(uri);
				fCache.put(uri, t);
			}catch  (Exception e) {
				throw new XPSError(e);		
			}
		}
		
		return t;
	}
	
	
	protected abstract T loadResource(String uri) throws Exception;
	
	

}