package javaaxp.swingviewer.app;

import javaaxp.swingviewer.ISwingViewerService;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

public class SwingViewerActivator implements BundleActivator {

	/* package */ static ISwingViewerService fSwingViewerService;
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
        ServiceReference ref = context.getServiceReference(ISwingViewerService.class.getName());
        fSwingViewerService = (ISwingViewerService) context.getService(ref);

	}
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {

	}

}
