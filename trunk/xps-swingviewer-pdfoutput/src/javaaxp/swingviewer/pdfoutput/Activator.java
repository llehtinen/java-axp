package javaaxp.swingviewer.pdfoutput;

import javaaxp.xps2pdf.service.IXPSToPDFConverterService;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

public class Activator implements BundleActivator {

	public static IXPSToPDFConverterService fPDFOutputService;

	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
        ServiceReference ref = context.getServiceReference(IXPSToPDFConverterService.class.getName());
        fPDFOutputService = (IXPSToPDFConverterService) context.getService(ref);
	}

	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {
	}

}
