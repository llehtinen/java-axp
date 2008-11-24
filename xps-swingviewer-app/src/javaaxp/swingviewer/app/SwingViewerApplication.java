package javaaxp.swingviewer.app;

import javaaxp.swingviewer.app.ui.XPSViewerFrame;

import org.eclipse.equinox.app.IApplication;
import org.eclipse.equinox.app.IApplicationContext;

public class SwingViewerApplication implements IApplication {

	private XPSViewerFrame fSwingViewerFrame;

	@Override
	public Object start(IApplicationContext context) throws Exception {
        fSwingViewerFrame = new XPSViewerFrame(SwingViewerActivator.fSwingViewerService);
        fSwingViewerFrame.setVisible(true);
        
        return null;
	}

	@Override
	public void stop() {
		fSwingViewerFrame.dispose();
	}

}
