package javaaxp.viewer.ui;

import java.io.File;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.PageController;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;

public class OpenXPSFileJob extends Job {

	private ISwingViewerService fViewerService;
	private File fFile;
	private PageController fPageController;

	public OpenXPSFileJob(ISwingViewerService swingViewerService, File f) {
		super("XPS Viewer: Opening " + f.getName());
		fViewerService  = swingViewerService;
		fFile = f;
	}

	@Override
	protected IStatus run(IProgressMonitor monitor) {
		monitor.beginTask("Loading", 1);
		try {
			fPageController = fViewerService.createPageController(fFile);
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        if (monitor.isCanceled()) { 
        	return Status.CANCEL_STATUS;
        } else {
        	return Status.OK_STATUS;
        }
        
		
	}

	public PageController getPageController() {
		return fPageController;
	}

	
}
