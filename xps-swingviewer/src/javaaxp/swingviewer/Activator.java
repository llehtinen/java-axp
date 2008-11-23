package javaaxp.swingviewer;

import java.util.Hashtable;

import javaaxp.core.service.IXPSService;
import javaaxp.swingviewer.service.impl.SwingViewerServiceImpl;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.util.tracker.ServiceTracker;

public class Activator implements BundleActivator {

	private ISwingViewerService service;
	private ServiceTracker helloServiceTracker;
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
		
        ServiceReference ref = context.getServiceReference(IXPSService.class.getName());
        IXPSService xpsAccess = (IXPSService) context.getService(ref);

		service = new SwingViewerServiceImpl(xpsAccess);
		
		// register the service
		context.registerService(ISwingViewerService.class.getName(), service, new Hashtable());
		
		// create a tracker and track the service
		helloServiceTracker = new ServiceTracker(context, ISwingViewerService.class.getName(), null);
		helloServiceTracker.open();
		
		// grab the service
		service = (ISwingViewerService) helloServiceTracker.getService();
	}
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {
		// close the service tracker
		helloServiceTracker.close();
		helloServiceTracker = null;
		
		service = null;
	}

}
