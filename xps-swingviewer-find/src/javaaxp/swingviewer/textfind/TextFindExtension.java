package javaaxp.swingviewer.textfind;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

import javaaxp.swingviewer.IUIExtension;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.SwingViewerContext;

public class TextFindExtension implements IUIExtension{

	private JMenuItem fFindMenuItem;
	protected PageController fCurentPageController;
	protected IXPSPageViewer fCurrentViewer;

	@Override
	public void documentShown(SwingViewerContext ctx) {
		fCurentPageController = ctx.getCurrentDocumentPageController();
		fCurrentViewer = ctx.getPageViewer();
		fFindMenuItem.setEnabled(fCurentPageController != null);
	}

	@Override
	public void init(final SwingViewerContext ctx) {
		//add a menu-item to the JFrame's menubar - KISS for now
		JMenuBar jmb = ctx.getUI().getJMenuBar();
		JMenu editMenu = new JMenu("Edit");
		fFindMenuItem = editMenu.add("Find...");
		fFindMenuItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				doSearch(ctx);
			}
		});
		jmb.add(editMenu);
		fFindMenuItem.setEnabled(false);
	}

	protected void doSearch(final SwingViewerContext ctx) {
		Thread t = new Thread(new Runnable() {
			@Override
			public void run() {
				SwingUtilities.invokeLater(new Runnable() {
					@Override
					public void run() {
						fFindMenuItem.setEnabled(false);
					}
				}); 
				try {
					String searchString = (String)JOptionPane.showInputDialog(ctx.getUI(), "Search String");
					new XPSFileSearcher(fCurentPageController, fCurrentViewer).search(searchString);
				} finally {
					SwingUtilities.invokeLater(new Runnable() {
						@Override
						public void run() {
							fFindMenuItem.setEnabled(true);
						}
					}); 
				}
			}
		}, "Text Search");
		t.start();
		
	}
	

}
