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

package javaaxp.swingviewer.app;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.concurrent.Semaphore;

import javax.swing.SwingUtilities;

import javaaxp.swingviewer.IUIExtension;
import javaaxp.swingviewer.SwingViewerContext;
import javaaxp.swingviewer.app.ui.XPSViewerFrame;

import org.eclipse.equinox.app.IApplication;
import org.eclipse.equinox.app.IApplicationContext;

public class SwingViewerApplication implements IApplication {

	private XPSViewerFrame fSwingViewerFrame;

	@Override
	public Object start(IApplicationContext context) throws Exception {
		final Semaphore windowClosing = new Semaphore(-1);
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
		        fSwingViewerFrame = new XPSViewerFrame(SwingViewerActivator.fSwingViewerService);
		        for (IUIExtension ext : SwingViewerActivator.fUIExtensions) {
					ext.init(new SwingViewerContext(SwingViewerActivator.fSwingViewerService, null,null, fSwingViewerFrame));
				}
		        fSwingViewerFrame.setVisible(true);
		        fSwingViewerFrame.addWindowListener(new WindowAdapter() {
		        	@Override
		        	public void windowClosed(WindowEvent e) {
		        		windowClosing.release();
		        	}
		        });
			}
		});
        
		windowClosing.acquire();
		return null;
	}

	@Override
	public void stop() {
		fSwingViewerFrame.dispose();
	}

}
