package javaaxp.swingviewer.textfind;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javaaxp.swingviewer.IUIExtension;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.SwingViewerContext;
import javaaxp.swingviewer.textfind.ui.FindPanel;
import javaaxp.swingviewer.textfind.ui.IFindPanelListener;

import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;

public class TextFindExtension implements IUIExtension, IFindPanelListener{

	public static class FindPanelRemover implements IFindPanelListener {

		private SwingViewerContext fContext;
		private Container fPrevContentPane;

		public FindPanelRemover(SwingViewerContext ctx, Container prevConentPanel) {
			fContext = ctx;
			fPrevContentPane = prevConentPanel;
		}

		@Override
		public void findPanelClosed() {
			fContext.getUI().setContentPane(fPrevContentPane);
			fContext.getUI().validate();
		}

		@Override
		public void findPanelShown() {
		}

		@Override
		public void searchStarted(String searchString) {
		}

		@Override
		public void searchEnded(boolean foundMatch) {
			// TODO Auto-generated method stub
			
		}

	}

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
		JMenuBar jmb = ctx.getUI().getJMenuBar();
		JMenu editMenu = new JMenu("Edit");
		fFindMenuItem = editMenu.add("Find...");
		fFindMenuItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				FindDialogController fdc = new FindDialogController(new XPSFileSearcher(fCurentPageController, fCurrentViewer));
				fdc.addFindPanelListener(TextFindExtension.this);
				FindPanel fp = new FindPanel(fdc);
				JPanel jp = new JPanel();
				jp.setLayout(new BorderLayout());
				final Container prevConentPanel = ctx.getUI().getContentPane(); 
				jp.add(prevConentPanel, BorderLayout.CENTER);
				jp.add(fp, BorderLayout.SOUTH);
				ctx.getUI().setContentPane(jp);
				ctx.getUI().validate();
				fdc.findPanelShown();
				fdc.addFindPanelListener(new FindPanelRemover(ctx, prevConentPanel));
			}
		});
		jmb.add(editMenu);
		fFindMenuItem.setEnabled(false);
	}

	PageController getCurrentPageController(){
		return fCurentPageController;
	}

	@Override
	public void findPanelClosed() {
		fFindMenuItem.setEnabled(true);
		
	}

	@Override
	public void findPanelShown() {
		fFindMenuItem.setEnabled(false);
		
	}

	@Override
	public void searchEnded(boolean foundMatch) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void searchStarted(String searchString) {
		// TODO Auto-generated method stub
		
	}
	

}
