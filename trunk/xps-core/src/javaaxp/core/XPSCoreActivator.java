package javaaxp.core;

import java.util.Hashtable;

import javaaxp.core.service.IXPSService;
import javaaxp.core.service.impl.XPSServiceImpl;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.util.tracker.ServiceTracker;

public class XPSCoreActivator implements BundleActivator {

	private IXPSService fXPSService;
	private ServiceTracker fServiceTracker;
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
		fXPSService = new XPSServiceImpl();
		
		// register the service
		context.registerService(IXPSService.class.getName(), fXPSService, new Hashtable());
		
		// create a tracker and track the service
		fServiceTracker = new ServiceTracker(context, IXPSService.class.getName(), null);
		fServiceTracker.open();
		
		// grab the service
		fXPSService = (IXPSService) fServiceTracker.getService();
	}
	
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {
		// close the service tracker
		fServiceTracker.close();
		fServiceTracker = null;
		
		fXPSService = null;
	}

}
