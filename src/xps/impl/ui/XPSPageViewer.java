package xps.impl.ui;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseWheelEvent;
import java.awt.event.MouseWheelListener;
import java.awt.image.BufferedImage;
import java.util.Observable;
import java.util.Observer;

import javax.swing.JPanel;
import javax.swing.JScrollPane;

import xps.XPSError;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;

public class XPSPageViewer extends JPanel implements Observer{

	private PageController fPageController;
	private XPSPageRenderer fPageRenderer;
	protected double fCurrentScale;
	private JScrollPane fScrollPane;
	private BufferedImage fBuffer;

	
	
	public XPSPageViewer(PageController controller, final JScrollPane pageScrollPane, XPSZipFileAccess xpsa, IDocumentReference doc) throws XPSError {
		fPageController = controller;
		fScrollPane = pageScrollPane;
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
		
		addMouseWheelListener(new MouseWheelListener() {
		
			public void mouseWheelMoved(MouseWheelEvent e) {
				fCurrentScale += 0.1 * e.getScrollAmount() * e.getWheelRotation();
				setPreferredSize(new Dimension((int)(fPageController.getPage().getWidth() * fCurrentScale), (int)(fPageController.getPage().getHeight() * fCurrentScale)));
				fScrollPane.getViewport().setViewSize(getPreferredSize());
				fScrollPane.getVerticalScrollBar().paintImmediately(fScrollPane.getVerticalScrollBar().getBounds());
				fBuffer = null;
				repaint();
			}
		
		});
		
		fCurrentScale = 1;
		fPageRenderer = new XPSPageRenderer(xpsa, doc);
		fPageRenderer.setPage(fPageController.getPage());
	}
	
	public void update(Observable o, Object arg) {
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


	


}
