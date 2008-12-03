package javaaxp.swingviewer.app.ui;

import org.eclipse.osgi.util.NLS;

public class Messages extends NLS {
	private static final String BUNDLE_NAME = "javaaxp.swingviewer.app.ui.messages"; //$NON-NLS-1$

	public static String XPSViewerFrame_ExitMenuItem;

	public static String XPSViewerFrame_FileMenu;

	public static String XPSViewerFrame_LoadingLabel;

	public static String XPSViewerFrame_OpenMenuItem;

	public static String XPSViewerFrame_WindowTitle;
	static {
		// initialize resource bundle
		NLS.initializeMessages(BUNDLE_NAME, Messages.class);
	}

	private Messages() {
	}
}
