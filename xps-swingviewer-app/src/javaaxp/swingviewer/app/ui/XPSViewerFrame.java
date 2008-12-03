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

package javaaxp.swingviewer.app.ui;

import java.awt.BorderLayout;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.util.concurrent.ExecutionException;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IUIExtension;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.SwingViewerContext;
import javaaxp.swingviewer.app.SwingViewerActivator;

import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JViewport;
import javax.swing.SwingWorker;

public class XPSViewerFrame extends JFrame {

	private ISwingViewerService fSwingViewerService;
	protected IXPSPageViewer fCurrentPageViewer;
	protected PageController fCurrentPageController;

	public XPSViewerFrame(ISwingViewerService swingViewerService) {
		super(Messages.XPSViewerFrame_WindowTitle);
		fSwingViewerService = swingViewerService;
		initMenu();
		setSize(800, 600);
	}

	private void initComponents() {
		getContentPane().removeAll();
		JPanel topPanel = new JPanel();
		topPanel.add(fCurrentPageViewer.createScaleControlPane(), BorderLayout.WEST);
		topPanel.add(fCurrentPageViewer.createPageControlPane(), BorderLayout.EAST);
		getContentPane().add(topPanel, BorderLayout.NORTH);
		
		
		JScrollPane pageScrollPane = new JScrollPane();
		JScrollPane treeScrollPane = new JScrollPane(fCurrentPageViewer.createDocumentOutlinePane());
		
		JViewport jvp = new JViewport(){
			public void paint(Graphics g) {
				g.setClip(0,0,getWidth(), getHeight());
				super.paint(g);
			};	
		};
		jvp.setView(fCurrentPageViewer.getPageRenderer().getRendererComponent());
		pageScrollPane.setViewport(jvp);
		pageScrollPane.getViewport().setOpaque(true);
		JSplitPane splitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT,treeScrollPane, pageScrollPane);

		getContentPane().add(splitPane, BorderLayout.CENTER);
		validate();
		fCurrentPageViewer.setScale(1d);
		
        for (IUIExtension ext : SwingViewerActivator.fUIExtensions) {
			ext.documentShown(new SwingViewerContext(fSwingViewerService, fCurrentPageController, fCurrentPageViewer,  this));
		}
	}

	private void initMenu() {
		JMenuBar bar = new JMenuBar();
		JMenu fileMenu = new JMenu(Messages.XPSViewerFrame_FileMenu);
		JMenuItem openItem = fileMenu.add(Messages.XPSViewerFrame_OpenMenuItem);
		openItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				openXPSFile();
			}
		});
		fileMenu.addSeparator();
		JMenuItem exitItem = fileMenu.add(Messages.XPSViewerFrame_ExitMenuItem);
		exitItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				quit();
			};
		});
		bar.add(fileMenu);
		setJMenuBar(bar);
	}

	protected void quit() {
		setVisible(false);
	}

	protected void openXPSFile() {
		JFileChooser chooser = new JFileChooser();
		int result = chooser.showOpenDialog(this);
		if(result == JFileChooser.APPROVE_OPTION){
			File f = chooser.getSelectedFile();
			if(f != null && f.exists()){
				showXPSFile(f);
			}
		}
	}

	private void showXPSFile(final File f) {
        for (IUIExtension ext : SwingViewerActivator.fUIExtensions) {
			ext.documentShown(new SwingViewerContext(fSwingViewerService, null, null, this));
		}

		getContentPane().removeAll();
		getContentPane().add(new JLabel(Messages.XPSViewerFrame_LoadingLabel));
		SwingWorker<PageController, Void> sw = new SwingWorker<PageController, Void>() {
			@Override
			protected PageController doInBackground() throws Exception {
				return fSwingViewerService.createPageController(f);
			}
			
			@Override
			protected void done() {
				try {
					fCurrentPageController = get();
					fCurrentPageViewer = fSwingViewerService.createPageViewer(get());
					initComponents();
				} catch (XPSError e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		};
		sw.execute();
		validate();
	}
	

}
