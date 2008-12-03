package javaaxp.swingviewer.textfind.ui;

import org.eclipse.osgi.util.NLS;

public class Messages extends NLS {
	private static final String BUNDLE_NAME = "javaaxp.swingviewer.textfind.ui.messages"; //$NON-NLS-1$

	public static String FindPanel_10;

	public static String FindPanel_9;

	public static String FindPanel_CloseButtonLabel;

	public static String FindPanel_FindNextButton;

	public static String FindPanel_FindPreviousButton;

	public static String FindPanel_NoMatchesLabel;
	static {
		// initialize resource bundle
		NLS.initializeMessages(BUNDLE_NAME, Messages.class);
	}

	private Messages() {
	}
}
