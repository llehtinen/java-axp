/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer.app.ui;

import org.eclipse.osgi.util.NLS;

public class Messages extends NLS {
	private static final String BUNDLE_NAME = "javaaxp.swingviewer.app.ui.messages"; //$NON-NLS-1$

	public static String XPSViewerFrame_AboutDialogTitle;

	public static String XPSViewerFrame_AboutMenuItem;

	public static String XPSViewerFrame_AppName;

	public static String XPSViewerFrame_ExitMenuItem;

	public static String XPSViewerFrame_FileMenu;

	public static String XPSViewerFrame_HelpMenu;

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
