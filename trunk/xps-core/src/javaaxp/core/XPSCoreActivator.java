package javaaxp.core;

import java.util.Hashtable;

import javaaxp.core.service.IXPSService;
import javaaxp.core.service.impl.XPSServiceImpl;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.util.tracker.ServiceTracker;

public class XPSCoreActivator implements BundleActivator {

	private IXPSService service;
	private ServiceTracker helloServiceTracker;
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
		service = new XPSServiceImpl();
		
		// register the service
		context.registerService(IXPSService.class.getName(), service, new Hashtable());
		
		// create a tracker and track the service
		helloServiceTracker = new ServiceTracker(context, IXPSService.class.getName(), null);
		helloServiceTracker.open();
		
		// grab the service
		service = (IXPSService) helloServiceTracker.getService();
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
