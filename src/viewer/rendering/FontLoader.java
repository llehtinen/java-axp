package viewer.rendering;

import java.awt.Font;
import java.io.ByteArrayInputStream;

import xps.api.IXPSAccess;
import xps.api.XPSError;
import xps.api.model.document.IDocumentReference;
import xps.api.util.CachingResourceLoader;
import xps.impl.zipfileaccess.XPSZipFileAccess;

public class FontLoader extends CachingResourceLoader<Font>{
	public FontLoader(IDocumentReference docRef, IXPSAccess access) {
		super(docRef, access);
	}

	@Override
	protected Font loadData(String uri) throws Exception {
		byte fontData[] = getFileAccess().getFontData(uri, getDocument());
		return Font.createFont(Font.TRUETYPE_FONT, new ByteArrayInputStream(fontData));
	}
}
