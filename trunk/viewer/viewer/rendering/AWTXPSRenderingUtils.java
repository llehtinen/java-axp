package viewer.rendering;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Shape;
import java.awt.geom.AffineTransform;
import java.awt.geom.Arc2D;
import java.awt.geom.GeneralPath;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.util.StringTokenizer;

import viewer.ShorthandPathParser;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.page.IArcSegment;
import xps.api.model.document.page.IPathFigure;
import xps.api.model.document.page.IPathGeometry;
import xps.api.model.document.page.IPolyBezierSegment;
import xps.api.model.document.page.IPolyLineSegment;
import xps.api.model.document.page.IPolyQuadraticBezierSegment;
import xps.impl.document.jaxb.STDashCap;
import xps.impl.document.jaxb.STFillRule;
import xps.impl.document.jaxb.STLineJoin;

public class AWTXPSRenderingUtils {
	//TODO: Unit test this class
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

	static int getDashCapType(STDashCap strokeDashCap) {
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

	static int getJoinType(STLineJoin strokeLineJoin) {
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

	static Color parseColourString(String fill) {
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
	



}

