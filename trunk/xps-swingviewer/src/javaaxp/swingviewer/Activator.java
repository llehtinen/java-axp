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
