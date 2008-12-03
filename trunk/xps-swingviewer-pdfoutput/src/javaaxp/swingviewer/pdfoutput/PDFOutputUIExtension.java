package javaaxp.swingviewer.pdfoutput;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.IUIExtension;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.swingviewer.SwingViewerContext;
import javaaxp.xps2pdf.service.IXPSToPDFConverter;

import javax.swing.JFileChooser;
import javax.swing.JMenuItem;

public class PDFOutputUIExtension implements IUIExtension {

	private JMenuItem fPDFOutputMenuItem;
	private PageController fPageController;
	private IXPSPageViewer fPageViewer;

	@Override
	public void documentShown(SwingViewerContext ctx) {
		fPDFOutputMenuItem.setEnabled(ctx.getCurrentDocumentPageController() != null);
		try {
			if(ctx.getCurrentDocumentPageController()  != null){
				fPageController = ctx.getSwingViewerService().createPageController(ctx.getPageViewer().getXPSAccess());
				fPageViewer = ctx.getSwingViewerService().createPageViewer(fPageController);
			} else {
				fPageController = null;
				fPageViewer = null;
			}
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void init(SwingViewerContext ctx) {
		fPDFOutputMenuItem = new JMenuItem("Save As PDF...");
		ctx.getUI().getJMenuBar().getMenu(0).insert(fPDFOutputMenuItem, ctx.getUI().getJMenuBar().getMenu(0).getItemCount() - 1);
		ctx.getUI().getJMenuBar().getMenu(0).insertSeparator(ctx.getUI().getJMenuBar().getMenu(0).getItemCount() - 1);
		
		fPDFOutputMenuItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				JFileChooser jfc = new JFileChooser();
				jfc.showSaveDialog(fPDFOutputMenuItem);
				File f = jfc.getSelectedFile();
				if(f != null){
					try {
						final FileOutputStream fOUt = new FileOutputStream(f);
						final IXPSToPDFConverter converter = Activator.fPDFOutputService.getDocumentConverter(fPageViewer, fPageController);
						
						new Thread("PDFOuput"){
							public void run() {
								try {
									try {
										converter.covertToPDF(fOUt);
									} catch (XPSError e) {
										// TODO Auto-generated catch block
										e.printStackTrace();
									}
								} finally {
									try {
										fOUt.close();
									} catch (IOException e) {}
								}
								
							}
						}.start();
					} catch (IOException e1){
						// TODO Auto-generated catch block
						e1.printStackTrace();
					} catch (XPSError e1){
						// TODO Auto-generated catch block
						e1.printStackTrace();
						
					}
				}
				
				
			}
		});
		
		fPDFOutputMenuItem.setEnabled(false);
	}

}
