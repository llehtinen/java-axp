package javaaxp.xps2pdf;

import java.util.Hashtable;

import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.xps2pdf.service.IXPSToPDFConverterService;
import javaaxp.xps2pdf.service.impl.XPSToPDFServiceImpl;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

public class Activator implements BundleActivator {

	private XPSToPDFServiceImpl fXPSToPDFService;

	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
        ServiceReference ref = context.getServiceReference(ISwingViewerService.class.getName());
        ISwingViewerService swingViewerService = (ISwingViewerService) context.getService(ref);
		fXPSToPDFService = new XPSToPDFServiceImpl(swingViewerService);
		
		// register the service
		context.registerService(IXPSToPDFConverterService.class.getName(), fXPSToPDFService, new Hashtable());
	}

	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {
	}

}
