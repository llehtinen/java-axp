package javaaxp.swingviewer.app.ui;

import java.awt.BorderLayout;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;
import java.util.concurrent.ExecutionException;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;

import javax.swing.JDialog;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JViewport;
import javax.swing.SwingWorker;

public class XPSViewerFrame extends JDialog {

	private ISwingViewerService fSwingViewerService;
	protected IXPSPageViewer fCurrentPageViewer;
	protected PageController fCurrentPageController;

	public XPSViewerFrame(ISwingViewerService swingViewerService) {
		super((Frame)null, "Java AXP Viewer", true);
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
		jvp.setView(fCurrentPageViewer.createViewerComponent());
		pageScrollPane.setViewport(jvp);
		pageScrollPane.getViewport().setOpaque(true);
		JSplitPane splitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT,treeScrollPane, pageScrollPane);

		getContentPane().add(splitPane, BorderLayout.CENTER);
		validate();
		fCurrentPageViewer.setScale(1d);
	}

	private void initMenu() {
		JMenuBar bar = new JMenuBar();
		JMenu fileMenu = new JMenu("File");
		JMenuItem openItem = fileMenu.add("Open");
		openItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				openXPSFile();
			}
		});
		fileMenu.addSeparator();
		JMenuItem exitItem = fileMenu.add("Exit");
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
		System.exit(0);
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
		getContentPane().removeAll();
		getContentPane().add(new JLabel("Loading..."));
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
