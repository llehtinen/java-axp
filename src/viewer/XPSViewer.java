package viewer;

import java.awt.BorderLayout;
import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JViewport;

import xps.api.IXPSAccess;
import xps.api.IXPSFileAccess;
import xps.api.XPSError;
import xps.impl.XPSFileAccessImpl;

public class XPSViewer {
	
	
	
	private IXPSFileAccess fXPSAccess;
	private JFrame mFrame;
	private XPSPageViewer fPageViewer;

	
	public XPSViewer(IXPSAccess access, IXPSFileAccess xpsFileAccess) throws XPSError {
		fXPSAccess = xpsFileAccess;
		mFrame = new JFrame("XPS Viewer");

		mFrame.addWindowListener(new WindowAdapter() {
				public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		}
		);
		
		//mFrame.getContentPane().add(new TestPanel());
		JScrollPane pageScrollPane = new JScrollPane();
		PageController pageController = new PageController(access);

		fPageViewer = new XPSPageViewer(pageController, pageScrollPane, access, fXPSAccess.getFixedDocumentSequence().getDocumentReference().get(0));
		pageController.addObserver(fPageViewer);
		JScrollPane treeScrollPane = new JScrollPane(DocumentOutlinePane.getDocumentTree(pageController));
		
		JViewport jvp = new JViewport(){
			public void paint(Graphics g) {
				g.setClip(0,0,getWidth(), getHeight());
				super.paint(g);
			};	
		};
		jvp.setView(fPageViewer);
		
		pageScrollPane.setViewport(jvp);

		
		pageScrollPane.getViewport().setOpaque(true);
		JSplitPane splitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT,treeScrollPane, pageScrollPane);
		splitPane.setDividerLocation(200);
		
		mFrame.getContentPane().add(new PageControlPane(pageController), BorderLayout.NORTH);
		mFrame.getContentPane().add(splitPane,BorderLayout.CENTER);
		mFrame.setSize(800,600);
		mFrame.setVisible(true);
	}



	public static void main(String[] args) {
		try {
			if(args.length < 1){
				System.out.println("Filename required");
			}
			
			for (String string : args) {
				File input = new File(string);
				if(!input.exists()){
					System.out.println("File required");
				}
				IXPSAccess access = new XPSFileAccessImpl(input);
				IXPSFileAccess xpsFileAccess = access.getFileAccess();
				XPSViewer f = new XPSViewer(access, xpsFileAccess);
			}
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
