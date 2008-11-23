package javaaxp.viewer.ui;

import java.awt.BorderLayout;
import java.awt.Frame;
import java.awt.Graphics;
import java.io.File;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.viewer.Activator;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JViewport;

import org.eclipse.core.runtime.jobs.IJobChangeEvent;
import org.eclipse.core.runtime.jobs.JobChangeAdapter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.awt.SWT_AWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;

public class View extends ViewPart {
	public static final String ID = "javaaxp.xps_swingviewerapp.view";
	private ISwingViewerService fSwingViewerService;
	private Frame fParentAWTFrame;

	@Override
	public void init(IViewSite site) throws PartInitException {
		super.init(site);
		fSwingViewerService = Activator.fSWingViwerAppPlugin.getSwingViwerService();
	}
	

	public void createPartControl(Composite parent) {
		Composite s = new Composite(parent, SWT.EMBEDDED);
		fParentAWTFrame = SWT_AWT.new_Frame(s);
		fParentAWTFrame.add(new JPanel());
	}
	
	

	/**
	 * Passing the focus request to the viewer's control.
	 */
	public void setFocus() {
	}


	public void viewXPSFile(File f) {
		fParentAWTFrame.removeAll();
		fParentAWTFrame.add(new JLabel("Loading..."));
		fParentAWTFrame.validate();
		
		final OpenXPSFileJob j = new OpenXPSFileJob(fSwingViewerService, f);
		j.addJobChangeListener(new JobChangeAdapter() {
	        public void done(IJobChangeEvent event) {
		        if (event.getResult().isOK()){
		        	final PageController c = j.getPageController();
		        	getViewSite().getShell().getDisplay().asyncExec(new Runnable() {
						@Override
						public void run() {
							displayXPSFile(c);
						}
					});
		        }
	        }
	     });
		j.schedule();
	}
	
	private void displayXPSFile(PageController c) {
		try {
			IXPSPageViewer viewer = fSwingViewerService.createPageViewer(c);
			JScrollPane pageScrollPane = new JScrollPane();
			JScrollPane treeScrollPane = new JScrollPane(viewer.createDocumentOutlinePane());
			
			JViewport jvp = new JViewport(){
				public void paint(Graphics g) {
					g.setClip(0,0,getWidth(), getHeight());
					super.paint(g);
				};	
			};
			jvp.setView(viewer.createViewerComponent());
			pageScrollPane.setViewport(jvp);
			pageScrollPane.getViewport().setOpaque(true);
			JSplitPane splitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT,treeScrollPane, pageScrollPane);
			fParentAWTFrame.removeAll();
			
			JPanel topPanel = new JPanel();
			topPanel.add(viewer.createScaleControlPane(), BorderLayout.WEST);
			topPanel.add(viewer.createPageControlPane(), BorderLayout.EAST);
			
			fParentAWTFrame.add(topPanel, BorderLayout.NORTH);
			fParentAWTFrame.add(splitPane,BorderLayout.CENTER);
			fParentAWTFrame.validate();
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}
}