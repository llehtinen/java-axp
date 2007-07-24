import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.StringBufferInputStream;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import viewer.rendering.AWTXPSRenderer;
import viewer.rendering.FontLoader;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.page.IFixedPage;
import xps.api.model.document.page.IPageResourceDictionary;
import xps.api.util.DelegatingResourceDictionary;
import xps.impl.XPSPageElementIterator;
import xps.impl.document.jaxb.util.XPSJAXBElementProducer;


public class ViewerTest {
	private static final String kSimplePath = "<Path Fill=\" #CCCC66\"  Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\"  />";
	private static final String kVisualBrushTest1 = " <Path Fill=\"#CCCC66\" Data=\"M 150,0 L 300,150 L 150,300 L 0,150 Z\" /> 	<Path Data=\"M 150,0 L 300,150 L 150,300 L 0,150 Z\"> 	<Path.Fill> 	<VisualBrush Viewbox=\"0,0,1,1\" Viewport=\"150,75,50,50\" ViewboxUnits=\"Absolute\" ViewportUnits=\"Absolute\" TileMode=\"Tile\"> 	<VisualBrush.Visual> 	<Canvas> 	<Path Fill=\"#333399\" Data=\"M 0.1,0.1 L 0.9,0.1 L 0.9,0.9 L 0.1,0.9 Z\" /> 	<Path Fill=\"#FFFF00\" Data=\"M 0.1,0.35 L 0.35,0.1 L 0.6,0.35 L 0.35,0.6 Z\" /> 	</Canvas> 	</VisualBrush.Visual> 	</VisualBrush> 	</Path.Fill> 	</Path>";
	private static final String kVisualBrushTest2 = "<Path Fill=\" #CCCC66\"  Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\"  /> 	<Path Data=\" M 150,0 L 300,150 L 150,300 L 0,150 Z\" > 	<Path.Fill> 	<VisualBrush Viewbox=\" 0,0,1,1\"              Viewport=\" 125,125,50,50\"   	    ViewboxUnits=\" Absolute\"  ViewportUnits=\" Absolute\"  TileMode=\"Tile\" > 			<VisualBrush.Visual> 				<Canvas> 				<Path Fill=\" #333399\"  Data=\" M 0.1,0.1 L 0.9,0.1 L 0.9,0.9 L 0.1,0.9 Z\"  /> 			<Path Fill=\" #FFFF00\"  Data=\" M 0.1,0.35 L 0.35,0.1 L 0.6,0.35 L 0.35,0.6 Z\" /> 			</Canvas> 			</VisualBrush.Visual> 			</VisualBrush> 				</Path.Fill> 			</Path>";
	private static final String kExample36 = "<Path> 	<Path.Fill>	<SolidColorBrush Color=\"#808080\"/>	</Path.Fill>	<Path.Data>    	<PathGeometry>	<PathFigure StartPoint=\"0,0\" IsClosed=\"true\">   	<PolyLineSegment Points=\"200,0 200,100 0,100 0,0\" />	</PathFigure>    	</PathGeometry>	</Path.Data>	</Path> 	<Canvas Opacity=\"0.5\" RenderTransform=\"0.75,0,0,0.75,25,46\">	<Path>  	<Path.Fill>	<SolidColorBrush Color=\"#0000FF\" />	</Path.Fill>	<Path.Data>	<PathGeometry>	<PathFigure StartPoint=\"0,0\" IsClosed=\"true\">	<PolyLineSegment Points=\"200,0 200,100 0,100 0,0\" />	</PathFigure>	</PathGeometry>	</Path.Data>	</Path>	<Glyphs FontUri=\"../Resources/Fonts/times.ttf\" OriginX=\"1\" OriginY=\"100\" UnicodeString=\"EXAMPLE\" FontRenderingEmSize=\"42\" RenderTransform=\"1.0,0,0,2.0,0,-100\">	<Glyphs.Fill>	<SolidColorBrush Color=\"#FFFFFF\" />	</Glyphs.Fill>	</Glyphs>	</Canvas>";
	
	
	
	public static void main(String[] args) {
//		renderSegment(kSimplePath);
		
		FontLoader fl = new FontLoader(null, null){
			protected Font loadResource(String uri) throws Exception {
				String string[] = Toolkit.getDefaultToolkit().getFontList();
				return new Font("Times New Roman", Font.PLAIN, 12);
			}
		};
		
		renderSegment(kExample36, fl);
	}

	private static void renderSegment(String segment, FontLoader fl) {
		segment = "<FixedPage xmlns=\"http://schemas.microsoft.com/xps/2005/06\"  Width=\"816\" Height=\"1056\">" + segment + "</FixedPage>";
		try {
			IFixedPage page = (IFixedPage)XPSJAXBElementProducer.createXPSElement(new StringBufferInputStream(segment));
			
			BufferedImage bi = new BufferedImage(300,300,BufferedImage.TYPE_4BYTE_ABGR);
			Graphics2D g2 = (Graphics2D)bi.createGraphics();
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			//create the renderer that will be used to render the visual brush
			AWTXPSRenderer visualBrushRenderer = new AWTXPSRenderer(fl, null, g2);
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
