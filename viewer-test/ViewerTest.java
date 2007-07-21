import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.StringBufferInputStream;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import viewer.rendering.AWTXPSRenderer;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.page.IFixedPage;
import xps.api.model.document.page.IPageResourceDictionary;
import xps.api.util.DelegatingResourceDictionary;
import xps.impl.XPSPageElementIterator;
import xps.impl.document.jaxb.util.XPSJAXBElementProducer;


public class ViewerTest {
	private static final String kSimplePath = "<FixedPage xmlns=\"http://schemas.microsoft.com/xps/2005/06\"  Width=\"816\" Height=\"1056\"> <Path Fill=\" #CCCC66\"  Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\"  /> </FixedPage>";
	private static final String kVisualBrushTest1 = "<FixedPage xmlns=\"http://schemas.microsoft.com/xps/2005/06\"  Width=\"816\" Height=\"1056\"> <Path Fill=\"#CCCC66\" Data=\"M 150,0 L 300,150 L 150,300 L 0,150 Z\" /> 	<Path Data=\"M 150,0 L 300,150 L 150,300 L 0,150 Z\"> 	<Path.Fill> 	<VisualBrush Viewbox=\"0,0,1,1\" Viewport=\"150,75,50,50\" ViewboxUnits=\"Absolute\" ViewportUnits=\"Absolute\" TileMode=\"Tile\"> 	<VisualBrush.Visual> 	<Canvas> 	<Path Fill=\"#333399\" Data=\"M 0.1,0.1 L 0.9,0.1 L 0.9,0.9 L 0.1,0.9 Z\" /> 	<Path Fill=\"#FFFF00\" Data=\"M 0.1,0.35 L 0.35,0.1 L 0.6,0.35 L 0.35,0.6 Z\" /> 	</Canvas> 	</VisualBrush.Visual> 	</VisualBrush> 	</Path.Fill> 	</Path> 			</FixedPage>";
	private static final String kVisualBrushTest2 = "<FixedPage xmlns=\"http://schemas.microsoft.com/xps/2005/06\"  Width=\"816\" Height=\"1056\"> <Path Fill=\" #CCCC66\"  Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\"  /> 	<Path Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\" > 	<Path.Fill> 	<VisualBrush Viewbox=\" 0,0,1,1\"              Viewport=\" 125,125,50,50\"   	    ViewboxUnits=\" Absolute\"  ViewportUnits=\" Absolute\"  TileMode=\"Tile\" > 			<VisualBrush.Visual> 				<Canvas> 				<Path Fill=\" #333399\"  Data=\" M 0.1,0.1 L 0.9,0.1 L 0.9,0.9 L 0.1,0.9 Z\"  /> 			<Path Fill=\" #FFFF00\"  Data=\" M 0.1,0.35 L 0.35,0.1 L 0.6,0.35 L 0.35,0.6 Z\" /> 			</Canvas> 			</VisualBrush.Visual> 			</VisualBrush> 				</Path.Fill> 			</Path> 			</FixedPage>";
	
	
	
	public static void main(String[] args) {
//		renderSegment(kSimplePath);
		renderSegment(kVisualBrushTest2);
	}

	private static void renderSegment(String wholePage) {
		try {
			IFixedPage page = (IFixedPage)XPSJAXBElementProducer.createXPSElement(new StringBufferInputStream(wholePage));
			
			BufferedImage bi = new BufferedImage(300,300,BufferedImage.TYPE_4BYTE_ABGR);
			Graphics2D g2 = (Graphics2D)bi.createGraphics();
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			//create the renderer that will be used to render the visual brush
			AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(null, null, g2);
			XPSPageElementIterator iterator = new XPSPageElementIterator(page, null, null) {
				protected DelegatingResourceDictionary loadResourceDictionary(IPageResourceDictionary resourceDictionary)
						throws XPSError {
					return DelegatingResourceDictionary.EMPTY_RESOURCE_DICTIONARY;
				}
			};
			iterator.accept(visualBrushRenderer);
			
			JOptionPane.showConfirmDialog(null, new JLabel(new ImageIcon(bi)));
		} catch (XPSSpecError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
