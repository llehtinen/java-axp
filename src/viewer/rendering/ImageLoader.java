package viewer.rendering;

import java.awt.image.BufferedImage;

import xps.api.util.CachingResourceLoader;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;

public class ImageLoader extends CachingResourceLoader<BufferedImage>{

	public ImageLoader(IDocumentReference docRef, XPSZipFileAccess access) {
		super(docRef, access);
	}

	@Override
	protected BufferedImage loadData(String uri) throws Exception {
		return getFileAccess().getImageResource(uri,  getDocument());
	}


}
