package javaaxp.swingviewer.service.impl;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import java.util.Observable;
import java.util.Observer;
import java.util.Vector;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.IFixedDocument;
import javaaxp.swingviewer.IXPSPageRenderer;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.IXPSRenderingExtension;
import javaaxp.swingviewer.PageController;

import javax.swing.JComponent;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JViewport;
import javax.swing.SwingUtilities;

public class XPSPageViewer extends JPanel implements Observer, IXPSPageViewer, IXPSPageRenderer{

	private PageController fPageController;
	private XPSPageRenderer fPageRenderer;
	protected double fCurrentScale;
//	private JScrollPane fScrollPane;
	private BufferedImage fBuffer;

	
	public XPSPageViewer(PageController controller) throws XPSError {
		IXPSAccess xpsAccess = controller.getXPSAccess();
		IDocumentReference doc = xpsAccess.getFileAccess().getFixedDocumentSequence().getDocumentReference().get(0);	
		
		fPageController = controller;
		fPageController.addObserver(this);
//		fScrollPane = pageScrollPane;
		setBackground(Color.WHITE);
		addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				if(e.getButton() == MouseEvent.BUTTON1){
					fPageController.nextPage();
				} else if(e.getButton() == MouseEvent.BUTTON3){
					fPageController.previousPage();
				}
			}
		});
		
//		addMouseWheelListener(new MouseWheelListener() {
//		
//			public void mouseWheelMoved(MouseWheelEvent e) {
//				fCurrentScale += 0.1 * e.getScrollAmount() * e.getWheelRotation();
//				setPreferredSize(new Dimension((int)(fPageController.getPage().getWidth() * fCurrentScale), (int)(fPageController.getPage().getHeight() * fCurrentScale)));
//				fScrollPane.getViewport().setViewSize(getPreferredSize());
//				fScrollPane.getVerticalScrollBar().paintImmediately(fScrollPane.getVerticalScrollBar().getBounds());
//				fBuffer = null;
//				repaint();
//			}
//		
//		});
		
		fCurrentScale = 1;
		fPageRenderer = new XPSPageRenderer(xpsAccess, doc);
		fPageRenderer.setPage(fPageController.getPage());
	}
	
	public void update(Observable o, Object arg) {
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				try {
					fPageRenderer.setPage(fPageController.getPage());
					setPreferredSize(new Dimension((int)fPageController.getPage().getWidth(), (int)fPageController.getPage().getHeight()));
					fBuffer = null;
					repaint();
				} catch (XPSError e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});
	}
	
	@Override
	public void paint(Graphics g) {
		
		if(bufferDirty()){
			Graphics2D g2 = fBuffer.createGraphics();
			paintPage(g2);
		} 
		
		//blit from buffer to g
		g.drawImage(fBuffer, 0, 0, null);
	}

	private void paintPage(Graphics2D g2) {
		g2.setColor(Color.WHITE);
		g2.fillRect(0, 0, fBuffer.getWidth(), fBuffer.getHeight());
		g2.drawString("Page " + fPageController.getPageNum(), 0, 10);
		g2.setClip(0,0,getWidth(),getHeight());
		((Graphics2D)g2).scale(fCurrentScale,fCurrentScale);
		try {
			fPageRenderer.paint((Graphics2D)g2);
		} catch (XPSError e) {
			e.printStackTrace();
			g2.drawString("Error", 10,	10);
		}
	}

	private boolean bufferDirty() {
		if(fBuffer == null || getWidth() != fBuffer.getWidth() || getHeight() != fBuffer.getHeight()){
			fBuffer = new BufferedImage(getWidth(), getHeight(), BufferedImage.TYPE_4BYTE_ABGR);
			return true;
		}
		return false;
	}

	@Override
	public double getScale() {
		return fCurrentScale;
	}

	@Override
	public IXPSPageRenderer getPageRenderer() {
		return this;
	}

	@Override
	public void setScale(double scale) {
		fCurrentScale = scale;
		
		setPreferredSize(new Dimension((int)(fPageController.getPage().getWidth() * fCurrentScale), (int)(fPageController.getPage().getHeight() * fCurrentScale)));
		if(getParent() instanceof JViewport){
			((JViewport)getParent()).setViewSize(getPreferredSize());
		}
		fBuffer = null;
		repaint();
	}
	
	@Override
	public JComponent createDocumentOutlinePane() {
		return DocumentOutlinePane.getDocumentTree(fPageController);
	}

	@Override
	public Observable getPageControllerObservables() {
		return fPageController.getObervable();
	}

	@Override
	public JComponent createPageControlPane() {
		return new PageControlPane(fPageController);
	}

	@Override
	public JComponent createScaleControlPane() {
		return new PageScaleControlPane(this);
	}

	@Override
	public void addRenderingExtension(IXPSRenderingExtension x) {
		fPageRenderer.addRenderingExtension(x);
	}

	@Override
	public JComponent getRendererComponent() {
		return this;
	}

	@Override
	public void removeRenderingExtension(IXPSRenderingExtension x) {
		fPageRenderer.removeRenderingExtension(x);
	}

	@Override
	public void forceRepaint() {
		fBuffer = null;
		getParent().repaint();
	}

}
