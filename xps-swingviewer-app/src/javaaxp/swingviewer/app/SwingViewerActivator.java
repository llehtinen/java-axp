package javaaxp.swingviewer.app;

import java.util.ArrayList;

import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IUIExtension;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtension;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.Platform;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

public class SwingViewerActivator implements BundleActivator {

	/* package */ static ISwingViewerService fSwingViewerService;
	public static ArrayList<IUIExtension> fUIExtensions  = new ArrayList<IUIExtension>();
	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext)
	 */
	public void start(BundleContext context) throws Exception {
        ServiceReference ref = context.getServiceReference(ISwingViewerService.class.getName());
        fSwingViewerService = (ISwingViewerService) context.getService(ref);
        
        //grab UIExtensions
        loadUIExtensions();
        
	}
	
	private void loadUIExtensions() {
		IExtensionRegistry reg = Platform.getExtensionRegistry();
		IExtensionPoint uiExtensionPoint = reg.getExtensionPoint("javaaxp.swingviewer.app.uiextension");
		IExtension extensions[] = uiExtensionPoint.getExtensions();
		for (IExtension extension : extensions) {
			for (IConfigurationElement config : extension.getConfigurationElements()) {
				try {
					Object o = config.createExecutableExtension("class");
					if(o instanceof IUIExtension){
						fUIExtensions.add((IUIExtension)o);
					}
				} catch (CoreException e) {
				}
			}
		}
	}

	/*
	 * (non-Javadoc)
	 * @see org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext context) throws Exception {

	}

}
