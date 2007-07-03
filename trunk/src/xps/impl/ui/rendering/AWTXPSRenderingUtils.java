package xps.impl.ui.rendering;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.GradientPaint;
import java.awt.Graphics2D;
import java.awt.Paint;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.TexturePaint;
import java.awt.geom.AffineTransform;
import java.awt.geom.Arc2D;
import java.awt.geom.GeneralPath;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import xps.XPSError;
import xps.XPSSpecError;
import xps.impl.document.jaxb.STDashCap;
import xps.impl.document.jaxb.STFillRule;
import xps.impl.document.jaxb.STLineCap;
import xps.impl.document.jaxb.STLineJoin;
import xps.impl.ui.ShorthandPathParser;
import xps.impl.zipfileaccess.XPSZipFileAccess;
import xps.model.document.IDocumentReference;
import xps.model.document.page.IArcSegment;
import xps.model.document.page.IGradientStop;
import xps.model.document.page.IImageBrush;
import xps.model.document.page.ILinearGradientBrush;
import xps.model.document.page.IPathFigure;
import xps.model.document.page.IPathGeometry;
import xps.model.document.page.IPolyBezierSegment;
import xps.model.document.page.IPolyLineSegment;
import xps.model.document.page.IPolyQuadraticBezierSegment;
import xps.model.document.page.IVisualBrush;
import xps.model.document.page.visitor.DelegatingResourceDictionary;

public class AWTXPSRenderingUtils {
	//TODO: Unit test this class
	
	private static Map<String, Font> fFontCache = new HashMap<String, Font>();


	static AffineTransform createAffineTransform(String renderTransform) {
		StringTokenizer st = new StringTokenizer(renderTransform, ",");
		double components[] = new double[6];
		for(int i = 0; i < components.length; i++){
			components[i] = Double.parseDouble(st.nextToken());
		}
		return new AffineTransform(components);
	}

	public static Rectangle2D createRectangle(String csv) throws XPSError {
		try {
			StringTokenizer st = new StringTokenizer(csv, ",");
			double components[] = new double[4];
			for(int i = 0; i < components.length; i++){
				components[i] = Double.parseDouble(st.nextToken());
			}
			return new Rectangle2D.Double(components[0],components[1],components[2],components[3]);
		} catch (Exception e) {
			throw new XPSError("Input '" + csv + "' for rectangle not well formed");
		}
	}

	public static BasicStroke getStroke(String strokeDashArray, STDashCap strokeDashCap, double strokeDashOffset, STLineCap strokeEndLineCap, STLineJoin strokeLineJoin, double strokeMiterLimit, double strokeThickness) {
		if(strokeDashArray != null){
			String dashes[] = strokeDashArray.split("\\s");
			float dashArray[] = new float[dashes.length];
			for (int i = 0; i < dashArray.length; i++) {
				dashArray[i] = Float.parseFloat(dashes[i]);
			}
			return new BasicStroke((float)strokeThickness, getDashCapType(strokeDashCap), getJoinType(strokeLineJoin),(float)strokeMiterLimit,dashArray, (float)strokeDashOffset);
		} else {
			return new BasicStroke((float)strokeThickness, getDashCapType(strokeDashCap), getJoinType(strokeLineJoin),(float)strokeMiterLimit);
		}
	}

	private static int getDashCapType(STDashCap strokeDashCap) {
		if(strokeDashCap == STDashCap.FLAT){
			return BasicStroke.CAP_BUTT;
		} else if(strokeDashCap == STDashCap.SQUARE){
			return BasicStroke.CAP_SQUARE;
		} else if(strokeDashCap == STDashCap.ROUND){
			return BasicStroke.CAP_ROUND;
		} else if(strokeDashCap == STDashCap.TRIANGLE){
			//TODO: Triangle dash caps
			return BasicStroke.CAP_ROUND; 
		} else {
			throw new IllegalArgumentException();
		}
	}

	private static int getJoinType(STLineJoin strokeLineJoin) {
		if(strokeLineJoin == STLineJoin.BEVEL){
			return BasicStroke.JOIN_BEVEL;
		} else if(strokeLineJoin == STLineJoin.MITER){
			return BasicStroke.JOIN_MITER;
		} else if(strokeLineJoin == STLineJoin.ROUND){
			return BasicStroke.JOIN_ROUND;
		} else {
			throw new IllegalArgumentException();
		}
	}

	public static Paint createPaintFromShorthand(String fill) {
		//TODO: Verify this is a solid colour fill
		Paint p = createColour(fill);
		if(p != null){
			return p;
		}
		//TODO: Remove if guaranteed to be a solid colour
		return Color.BLACK;
		
	}

	private static Color createColour(String fill) {
		if(fill.startsWith("#")){
			//derive colour from hex
			fill = fill.substring(1);
			
			if(fill.length() == 6){
				String red = fill.substring(0,2);
				String green = fill.substring(2,4);
				String blue = fill.substring(4,6);
				
				int r = Integer.parseInt(red, 16);
				int g = Integer.parseInt(green, 16);
				int b = Integer.parseInt(blue, 16);
				
				return new Color(r,g,b);
			} else if(fill.length() == 8){
				String alpha = fill.substring(0,2);
				String red = fill.substring(2,4);
				String green = fill.substring(4,6);
				String blue = fill.substring(6,8);
				
				
				int a = Integer.parseInt(alpha, 16);
				int r = Integer.parseInt(red, 16);
				int g = Integer.parseInt(green, 16);
				int b = Integer.parseInt(blue, 16);
				
				return new Color(r,g,b,a);
			}
		} 
			
		return Color.BLACK;
		
	}
	
	static Paint createPaintFromLinearGradientBrush(ILinearGradientBrush brush) throws XPSSpecError {
		Point2D start = createPoint(brush.getStartPoint());
		Point2D end = createPoint(brush.getEndPoint());
		//TODO: Handle more than 2 gradient stops
		//TODO: Handle transform of gradient
		//TODO: Handle transform of linear gradient brushes
		
		
		
		List<? extends IGradientStop> stops = brush.getLinearGradientBrushGradientStops().getGradientStop();
		if(stops.size() >= 2){
			IGradientStop s1 = stops.get(0);
			IGradientStop s2 = stops.get(1);
			return new GradientPaint(start,createColour(s1.getColor()), end, createColour(s2.getColor()));

		} else {
			throw new XPSSpecError(6,5,"Must have at least 2 gradient stops");
		}
	}

	static Paint createPaintFromVisualBrush(IVisualBrush visualBrush, String tranformMatrix, DelegatingResourceDictionary resources, XPSZipFileAccess access, IDocumentReference docRef) throws XPSError {
		AffineTransform at = new AffineTransform();
		if(tranformMatrix != null){
			at = createAffineTransform(tranformMatrix);
		}

		Rectangle2D portionOfSourceImageToBeRendered = createRectangle(visualBrush.getViewbox());
		Rectangle2D locationOfFirstTileToRender = createRectangle(visualBrush.getViewport());
		
		BufferedImage bi = new BufferedImage((int)locationOfFirstTileToRender.getWidth(), (int)locationOfFirstTileToRender.getHeight(), BufferedImage.TYPE_4BYTE_ABGR);
		Graphics2D g2 = bi.createGraphics();
		g2.transform(at);
		XPSRenderer.renderVisual(g2, visualBrush, resources, access, docRef);
		return new ImageBrushPaint(bi, at, portionOfSourceImageToBeRendered, locationOfFirstTileToRender, visualBrush.getTileMode(), visualBrush.getOpacity());
		//return ImageBrushPaint.getImageBrushPaint(bi, at, portionOfSourceImageToBeRendered, locationOfFirstTileToRender, visualBrush.getTileMode(), visualBrush.getOpacity(), imageSource)
	}
	
	static Paint createPaintFromImageBrush(IImageBrush imageBrush, String tranformMatrix, BufferedImage imageResource) throws XPSError {
		BufferedImage bi = imageResource;
		AffineTransform at = new AffineTransform();
		if(tranformMatrix != null){
			at = createAffineTransform(tranformMatrix);
		}

		Rectangle2D portionOfSourceImageToBeRendered = createRectangle(imageBrush.getViewbox());
		Rectangle2D locationOfFirstTileToRender = createRectangle(imageBrush.getViewport());
		Rectangle2D bounds2D = at.createTransformedShape(locationOfFirstTileToRender).getBounds2D();
		return new TexturePaint(bi, bounds2D){
			public java.awt.PaintContext createContext(java.awt.image.ColorModel cm, java.awt.Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {			
				hints.put(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
				return super.createContext(cm, deviceBounds, userBounds, xform, hints);
			}
		};

//		ImageBrushPaint is a better implementation of the XPS spec, but is not as efficient to render simple image brushes.
//		return ImageBrushPaint.getImageBrushPaint(bi, at, portionOfSourceImageToBeRendered, locationOfFirstTileToRender, imageBrush.getTileMode(), imageBrush.getOpacity(), imageBrush.getImageSource());
	}
	
	

	static GeneralPath createShapeFromShorthandCommands(String commands, boolean fillRuleAllowed) {
		GeneralPath gp = new GeneralPath();
		
		ShorthandPathParser.SHORTHAND_PARSER.initForNewPath(commands, fillRuleAllowed);
		try {
			ShorthandPathParser.SHORTHAND_PARSER.parseCommands();
			
			for (IPathFigure figure : ShorthandPathParser.SHORTHAND_PARSER.getPathFigures()) {
				gp.append(AWTXPSRenderingUtils.createShapeFromPathFigure(figure), false);
			}
			
			
		} catch (XPSError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return gp;
	}

	static Shape createShapeFromPathGeometry(IPathGeometry geo) throws XPSError {
		if(geo.getFigures() != null && geo.getPathFigure() != null){
			throw new XPSSpecError(4,3,"Ambiguous path geometry");
		}
		
		if(geo.getTransform() != null && geo.getPathGeometryTransform() != null){
			throw new XPSSpecError(2,74,"Ambiguous path transform");
		}
		
		AffineTransform at = null;
		if(geo.getPathGeometryTransform() != null){
			at = AWTXPSRenderingUtils.createAffineTransform(geo.getPathGeometryTransform().getMatrixTransform().getMatrix());
		} else if(geo.getTransform() != null){
			at = AWTXPSRenderingUtils.createAffineTransform(geo.getTransform());
		}
		
		STFillRule fillRule = STFillRule.EVEN_ODD;
		if(geo.getFillRule() != null){
			fillRule = geo.getFillRule(); 
		}
		
		GeneralPath gp = null;
		if(geo.getFigures() != null){
			gp = AWTXPSRenderingUtils.createShapeFromShorthandCommands(geo.getFigures(), false);
		} else if(geo.getPathFigure() != null){
			gp = new GeneralPath();
			for (IPathFigure figure : geo.getPathFigure()) {
				gp.append(AWTXPSRenderingUtils.createShapeFromPathFigure(figure), false);
			}
		}
		
		if(gp != null){
			if(at != null){
				gp.transform(at);
			}
		
			if(fillRule == STFillRule.EVEN_ODD){
				gp.setWindingRule(GeneralPath.WIND_EVEN_ODD);
			} else if(fillRule == STFillRule.NON_ZERO){
				gp.setWindingRule(GeneralPath.WIND_NON_ZERO);
			}
		}
		
		return gp;
	}

	public static GeneralPath createShapeFromPathFigure(IPathFigure figure) throws XPSError {
		GeneralPath gp = new GeneralPath();
		Point2D.Double startingPoint = AWTXPSRenderingUtils.createPoint(figure.getStartPoint());
		gp.moveTo((float)startingPoint.x, (float)startingPoint.y);
		
		for (Object o : figure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment()) {
			if(o instanceof IArcSegment){
				appendSegment((IArcSegment)o, gp);
			} else if(o instanceof IPolyLineSegment){
				appendSegment((IPolyLineSegment)o, gp);
			} else if(o instanceof IPolyQuadraticBezierSegment){
				appendSegment((IPolyQuadraticBezierSegment)o,gp);
			} else if(o instanceof IPolyBezierSegment){
				appendSegment((IPolyBezierSegment)o,gp);
			}
		}
		
		if(figure.isIsClosed()){
			gp.closePath();
		}
		
		return gp;
	}

	public static Point2D.Double createPoint(String point) {
		StringTokenizer st = new StringTokenizer(point, ",");
		double components[] = new double[2];
		for(int i = 0; i < components.length; i++){
			components[i] = Double.parseDouble(st.nextToken());
		}
		return new Point2D.Double(components[0],components[1]);
	}
	
	private static void appendSegment(IPolyBezierSegment segment, GeneralPath gp) throws XPSSpecError {
		String points[] = segment.getPoints().split("\\s");
		if(points.length % 3 != 0){
			throw new XPSSpecError(4, 2, "PolyBezier requires multiple of 3 points");
		}
		
		int i = 0;
		while(i < points.length){
			Point2D p1 = createPoint(points[i++]);
			Point2D p2 = createPoint(points[i++]);
			Point2D p3 = createPoint(points[i++]);
			gp.curveTo((float)p1.getX(), (float)p1.getY(),(float)p2.getX(), (float)p2.getY(),(float)p3.getX(), (float)p3.getY());
		}

	}

	private static void appendSegment(IPolyQuadraticBezierSegment segment, GeneralPath gp) throws XPSSpecError {
		String points[] = segment.getPoints().split("\\s");
		if(points.length % 2 != 0){
			throw new XPSSpecError(4, 2, "PolyQuadraticBezier requires multiple of 2 points");
		}
		
		int i = 0;
		while(i < points.length){
			Point2D p1 = createPoint(points[i++]);
			Point2D p2 = createPoint(points[i++]);
			gp.quadTo((float)p1.getX(), (float)p1.getY(),(float)p2.getX(), (float)p2.getY());
		}
	}

	private static void appendSegment(IPolyLineSegment segment, GeneralPath gp) throws XPSSpecError {
		StringTokenizer st = new StringTokenizer(segment.getPoints(), ",");
		while(st.hasMoreTokens()){
			String x = st.nextToken();
			String y = st.nextToken();
			gp.lineTo(Float.parseFloat(x), Float.parseFloat(y));
		}
		
//		String points[] = segment.getPoints().split("\\,");
//		if(points.length % 2 != 0){
//			throw new XPSSpecError(4, 2, "Malformed polyline points");
//		}
//		
//		int i = 0;
//		while(i < points.length){
//			gp.lineTo(Float.parseFloat(points[i++]), Float.parseFloat(points[i++]));
//		}		
	}

	private static void appendSegment(IArcSegment segment, GeneralPath gp) throws XPSError {
		//TODO: Implement ARC Drawing
		Arc2D.Float arc = new Arc2D.Float(Arc2D.OPEN);
		
		Rectangle2D sizeRect = createRectangle(segment.getSize());
		Rectangle2D endPoint = createRectangle(segment.getPoint());
		double angle = segment.getRotationAngle();
	}
	
	public static Font loadFont(String fontUri, XPSZipFileAccess access, IDocumentReference docRef) throws XPSError {
		Font f = fFontCache .get(fontUri);
		if(f == null){
			byte fontData[] = access.getFontData(fontUri, docRef);
			try {
				f = Font.createFont(Font.TRUETYPE_FONT, new ByteArrayInputStream(fontData));
				fFontCache.put(fontUri, f);
			} catch (FontFormatException e) {
				throw new XPSError(e);
			} catch (IOException e) {
				throw new XPSError(e);		
			}
		}
		
		return f;
	}


}

