package viewer.rendering;

import java.awt.Font;
import java.io.ByteArrayInputStream;

import xps.api.IXPSAccess;
import xps.api.IXPSFileAccess;
import xps.api.model.document.IDocumentReference;
import xps.api.util.CachingResourceLoader;

public class FontLoader extends CachingResourceLoader<Font>{
	private IXPSFileAccess fFileAccess;
	private IDocumentReference fDocument;

	public FontLoader(IDocumentReference docRef, IXPSFileAccess access) {
		fFileAccess = access;
		fDocument = docRef;

	}

	@Override
	protected Font loadResource(String uri) throws Exception {
		byte fontData[] = fFileAccess.getFontData(uri, fDocument);
		return Font.createFont(Font.TRUETYPE_FONT, new ByteArrayInputStream(fontData));
	}

}
