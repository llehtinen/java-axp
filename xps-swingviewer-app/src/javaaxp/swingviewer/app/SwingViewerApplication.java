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
