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
		IExtensionPoint uiExtensionPoint = reg.getExtensionPoint("javaaxp.swingviewer.app.uiextension"); //$NON-NLS-1$
		IExtension extensions[] = uiExtensionPoint.getExtensions();
		for (IExtension extension : extensions) {
			for (IConfigurationElement config : extension.getConfigurationElements()) {
				try {
					Object o = config.createExecutableExtension("class"); //$NON-NLS-1$
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
