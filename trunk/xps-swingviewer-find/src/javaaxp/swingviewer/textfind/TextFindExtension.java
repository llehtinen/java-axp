package javaaxp.swingviewer.textfind;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;

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
				String searchString = (String)JOptionPane.showInputDialog(ctx.getUI(), "Search String");
				new XPSFileSearcher(fCurentPageController, fCurrentViewer).search(searchString);
			}
		});
		jmb.add(editMenu);
		fFindMenuItem.setEnabled(false);
	}
	

}
