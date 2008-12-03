package javaaxp.swingviewer.textfind;

import org.eclipse.osgi.util.NLS;

public class Messages extends NLS {
	private static final String BUNDLE_NAME = "javaaxp.swingviewer.textfind.messages"; //$NON-NLS-1$

	public static String TextFindExtension_EditMenu;

	public static String TextFindExtension_FindMenuItem;
	static {
		// initialize resource bundle
		NLS.initializeMessages(BUNDLE_NAME, Messages.class);
	}

	private Messages() {
	}
}
