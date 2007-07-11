package viewer;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.Raster;
import java.io.File;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JViewport;

import xps.XPSError;
import xps.impl.zipfileaccess.XPSZipFileAccess;

public class SimpleXPSFrame {
	
	
	
	private XPSZipFileAccess fXPSAccess;
	private JFrame mFrame;
	private XPSPageViewer fPageViewer;

	public SimpleXPSFrame(XPSZipFileAccess xpsA) throws XPSError {
		fXPSAccess = xpsA;
		mFrame = new JFrame("XPS Viewer");

		mFrame.addWindowListener(new WindowAdapter() {
				public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		}
		);
		
		//mFrame.getContentPane().add(new TestPanel());
		JScrollPane pageScrollPane = new JScrollPane();
		PageController pageController = new PageController(fXPSAccess);
		fPageViewer = new XPSPageViewer(pageController, pageScrollPane, xpsA, fXPSAccess.getFixedDocumentSequence().getDocumentReference().get(0));
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
				
				XPSZipFileAccess xpsA = new XPSZipFileAccess(input);
				SimpleXPSFrame f = new SimpleXPSFrame(xpsA);
			}
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private static class TestPanel extends JPanel {
		private final class TestPaintContext implements PaintContext {
			private final ColorModel cm;
			private BufferedImage bi;
			private AffineTransform tx;
			private Rectangle2D ub;

			private TestPaintContext(ColorModel cm, AffineTransform xform, Rectangle2D userBounds) {
				this.cm = cm;
				BufferedImage temp = new BufferedImage(50,50,BufferedImage.TYPE_4BYTE_ABGR);
				for(int i = 0; i < 50; i++){
					for(int j = 0; j < 50; j++){
						if(i == 0 || j == 0 || i == j){
							temp.getRaster().setPixel(i, j, new int[] {255,255,255, 255});
						} else {
							temp.getRaster().setPixel(i, j, new int[] {0, 0,0,255});
						}
					}
				};
				tx = xform;
				bi = new BufferedImage((int)(userBounds.getWidth()), (int)(userBounds.getHeight()), BufferedImage.TYPE_4BYTE_ABGR);
				Graphics2D g2 = bi.createGraphics();
				g2.translate(-userBounds.getX(), -userBounds.getY());
				AffineTransform tx = g2.getTransform();
				tx.concatenate(xform);
				g2.setTransform(tx);
				g2.drawImage(temp, 0,0,null);
				
				AffineTransform at = AffineTransform.getTranslateInstance(50, 0);
				at.concatenate(AffineTransform.getTranslateInstance(50, 0));
				at.concatenate(AffineTransform.getScaleInstance(-1, 1));
				
				g2.drawImage(temp, at,null);

				
				at.concatenate(AffineTransform.getScaleInstance(-1, 1));

				g2.drawImage(temp, at,null);
				
				ub = userBounds;
			}

			public Raster getRaster(int x, int y, int w, int h) {
				/* 
				 *The  rectangle required from the raster (in pixel units of the raster)
				 * 
				 */
				
				try {
					return bi.getRaster().createChild(x - (int)ub.getX(), y-(int)ub.getY(), w, h, 0, 0, null);
				} catch (Throwable t){
					t.printStackTrace();
					return bi.getRaster();
				}
			}

			public ColorModel getColorModel() {
				// TODO Auto-generated method stub
				return bi.getColorModel();
			}

			public void dispose() {
				// TODO Auto-generated method stub
			
			}
		}

		public TestPanel() { 
			super();
			setPreferredSize(new Dimension(400,400));
		}
		
		public void paint(Graphics g){
			
			Paint p = new Paint() {
				public int getTransparency() {
					// TODO Auto-generated method stub
					return 0;
				}
			
				public PaintContext createContext(final ColorModel cm, Rectangle deviceBounds,
						Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {
				/*   
				 * deviceBounds - 	The size of the area to be painted in the physical device
				 * userBounds -		The area required of the source raster required to paint (ie, Any scale transforms are taken into account)
				 * xform - 			The composed transform (scale, rot, skew)
				 * 
				 * */	
					return new TestPaintContext(cm,xform,deviceBounds);
				}
			
			};
			
			g.translate(0,0);
			
			AffineTransform at = ((Graphics2D)g).getTransform();
			//at.concatenate(AffineTransform.getRotateInstance(Math.PI / 4));
			((Graphics2D)g).setTransform(at);
			((Graphics2D)g).setPaint(p);
			g.fillRect(0, 0, 200, 200);
			
		}
		
		
	}
	
	
	
}
