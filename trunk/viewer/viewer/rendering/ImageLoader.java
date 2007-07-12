package viewer.rendering;

import java.awt.image.BufferedImage;

import xps.api.IXPSAccess;
import xps.api.model.document.IDocumentReference;
import xps.api.util.CachingResourceLoader;

public class ImageLoader extends CachingResourceLoader<BufferedImage>{

	public ImageLoader(IDocumentReference docRef, IXPSAccess access)  {
		super(docRef, access);
	}

	@Override
	protected BufferedImage loadData(String uri) throws Exception {
		return getFileAccess().getImageResource(uri,  getDocument());
	}


}
