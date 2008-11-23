package javaaxp.swingviewer.service.impl.rendering;

import java.awt.Font;
import java.io.ByteArrayInputStream;

import javaaxp.core.service.CachingResourceLoader;
import javaaxp.core.service.IXPSFileAccess;
import javaaxp.core.service.model.document.IDocumentReference;

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
