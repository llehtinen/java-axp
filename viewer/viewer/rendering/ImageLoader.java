package viewer.rendering;

import java.awt.image.BufferedImage;

import xps.api.IXPSAccess;
import xps.api.IXPSFileAccess;
import xps.api.model.document.IDocumentReference;
import xps.api.util.CachingResourceLoader;

public class ImageLoader extends CachingResourceLoader<BufferedImage>{

	private IXPSFileAccess fFileAccess;
	private IDocumentReference fDocument;

	public ImageLoader(IDocumentReference docRef, IXPSFileAccess access)  {
		fFileAccess = access;
		fDocument = docRef;
	}

	@Override
	protected BufferedImage loadResource(String uri) throws Exception {
		return fFileAccess.getImageResource(uri,  fDocument);
	}
}
