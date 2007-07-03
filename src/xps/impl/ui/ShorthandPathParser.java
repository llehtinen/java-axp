package xps.impl.ui;

import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import xps.XPSError;
import xps.XPSSpecError;
import xps.impl.document.jaxb.STFillRule;
import xps.impl.document.jaxb.STSweepDirection;
import xps.impl.ui.rendering.AWTXPSRenderingUtils;
import xps.model.document.page.IArcSegment;
import xps.model.document.page.ILineSegment;
import xps.model.document.page.IPathFigure;
import xps.model.document.page.IPolyBezierSegment;
import xps.model.document.page.IPolyLineSegment;
import xps.model.document.page.IPolyQuadraticBezierSegment;

public class ShorthandPathParser {

	
	public static final ShorthandPathParser SHORTHAND_PARSER = new ShorthandPathParser();

	private final CloseHandler CLOSE_HANDLER = new CloseHandler();
	private final ElipticalArcHandler ELIPTICAL_ARC_HANDLER = new ElipticalArcHandler();
	private final SmoothCubicBezierHandler SMOOTH_CUBIC_BEZIER_HANDLER = new SmoothCubicBezierHandler();
	private final QuadraticBezierHandler QUADRATIC_BEZIER_HANDLER = new QuadraticBezierHandler();
	private final CubicBezierHandler CUBIC_BEZIER_HANDLER = new CubicBezierHandler();
	private final VerticalLineToHandler VERTICAL_LINE_TO_HANDLER = new VerticalLineToHandler();
	private final HorizontalLineToHandler HORIZONTAL_LINE_TO_HANDLER = new HorizontalLineToHandler();
	private final LineToHandler LINE_TO_HANDLER = new LineToHandler();
	private final MoveToHandler MOVE_TO_HANDLER = new MoveToHandler();
	private final FillModeHandler FILL_MODE_HANDLER = new FillModeHandler();

	public class PathFigure implements IPathFigure {

		private String fStartPoint;
		private List<ILineSegment> fSegments = new ArrayList<ILineSegment>();
		private boolean fClosed;

		
		public List<ILineSegment> getPolyLineSegmentOrPolyBezierSegmentOrArcSegment() {
			return fSegments;
		}

		public String getStartPoint() {
			return fStartPoint;
		}

		public boolean isIsClosed() {
			return fClosed;
		}

		//TODO: What should these be for shorthand
		public boolean isIsFilled() {
			return true;
		}

		public void setStartPoint(String point) {
			fStartPoint = point;
			
		}

		public void setClosed(boolean closed) {
			fClosed = closed;
		}
	}

	public class DrawCommandHandler {
		protected boolean fAbsolute;
		public DrawCommandHandler() {
		}
		public DrawCommandHandler(boolean b) {
			fAbsolute = b;
		}
		
		public void setAbsolute(boolean b){
			fAbsolute = b;
		}
	}

	public class ElipticalArcHandler extends DrawCommandHandler implements Runnable {

		public ElipticalArcHandler() {
		}

		public void run() {
			// TODO Auto-generated method stub

		}

	}

	public class SmoothCubicBezierHandler extends DrawCommandHandler implements Runnable {

		public SmoothCubicBezierHandler() {
		}

		public void run() {
			// TODO Auto-generated method stub

		}

	}

	public class QuadraticBezierHandler extends DrawCommandHandler implements Runnable {

		public QuadraticBezierHandler() {
		}

		public void run() {
			Point2D.Double p[] = new Point2D.Double[2];
			String points = "";
			for(int i = 0; i < p.length; i++){
				p[i] = parsePoint(fPathComponents[fCurrentPos++]);
				if(!fAbsolute){
					p[i].x += fLastPoint.x;
					p[i].y += fLastPoint.y;
				}
				
				points += p[i].x + "," + p[i].y  + " ";
			}
			
			points = points.trim();
			fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyQuadraticBeizerSegment(points));
			
			//TODO: What's the last point?
			fLastPoint = p[2];

		}

	}

	public class CubicBezierHandler extends DrawCommandHandler implements Runnable {

		public CubicBezierHandler() {
		}

		public void run() {
			Point2D.Double p[] = new Point2D.Double[3];
			String points = "";
			for(int i = 0; i < p.length; i++){
				p[i] = parsePoint(fPathComponents[fCurrentPos++]);
				if(!fAbsolute){
					p[i].x += fLastPoint.x;
					p[i].y += fLastPoint.y;
				}
				
				points += p[i].x + "," + p[i].y  + " ";
			}
			
			points = points.trim();
			fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyBeizerSegment(points));
			
			//TODO: What's the last point?
			fLastPoint = p[2];
		}

	}

	public class VerticalLineToHandler extends DrawCommandHandler implements Runnable {

		public VerticalLineToHandler() {
		}

		public void run() {
			String point = fPathComponents[fCurrentPos++];
			int y = Integer.parseInt(point);
			Point2D.Double p = fLastPoint;
			

			if(fAbsolute){
				p.y = y;
			} else {
				p.y += y;
			}
			fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyLineSegment(p.x + "," + p.y));
			fLastPoint = p;
		}

	}

	public class HorizontalLineToHandler extends DrawCommandHandler implements Runnable {

		public HorizontalLineToHandler() {
		}

		public void run() {
			String point = fPathComponents[fCurrentPos++];
			int x = Integer.parseInt(point);
			Point2D.Double p = fLastPoint;
			

			if(fAbsolute){
				p.x = x;
			} else {
				p.x += x;
			}
			fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyLineSegment(p.x + "," + p.y));
			fLastPoint = p;
		}

	}

	public class LineToHandler extends DrawCommandHandler implements Runnable {

		public LineToHandler() {
		}

		public void run() {
			String point = fPathComponents[fCurrentPos++];
			Point2D.Double p = parsePoint(point);

			if(fAbsolute){
				fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyLineSegment(point));
			} else {
				p.x += fLastPoint.x;
				p.y += fLastPoint.y;
				fCurrentFigure.getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(new PolyLineSegment(p.x + "," + p.y));
			}
			fLastPoint = p;
		}

	}

	public class MoveToHandler extends DrawCommandHandler implements Runnable {

		public MoveToHandler() {
		}

		public void run() {
			fCurrentFigure = new PathFigure();
			fFigures.add(fCurrentFigure);
			String point = fPathComponents[fCurrentPos++];
			Point2D.Double p = parsePoint(point);
			
			if(fAbsolute){
				fCurrentFigure.setStartPoint(point);
			} else {
				p.x += fLastPoint.x;
				p.y += fLastPoint.y;
				fCurrentFigure.setStartPoint(p.x + "," + p.y);
			}
			fLastPoint = p;
		}

	}


	public class CloseHandler implements Runnable {
		public void run() {
			fCurrentFigure.setClosed(true);
		}
	}
	
	public class FillModeHandler implements Runnable {
		public void run() {
			//addvance the 
			String currElement = fPathComponents[fCurrentPos++];
			if(currElement.equals("0")){
				fCurrentFillMode = STFillRule.EVEN_ODD;
			} else if(currElement.equals("1")){
				fCurrentFillMode = STFillRule.NON_ZERO;
			}
		}
	}
	
	
	private String[] fPathComponents;
	private PathFigure fCurrentFigure;
	private Vector<PathFigure> fFigures;
	public STFillRule fCurrentFillMode;
	
	private int fCurrentPos;
	private Runnable fLastCommand;
	private Double fLastPoint;
	private boolean fFillRuleAllowed;
	
	
	private ShorthandPathParser(){
//		//spit up the path by whitespace
//		init(fillRuleAllowed);
//		setPath(path);
	}
	
	public void initForNewPath(String path, boolean fillRuleAllowed){
		init(fillRuleAllowed);
		setPath(path);
	}


	private void init(boolean fillRuleAllowed) {
		fFigures = new Vector<PathFigure>();
		fCurrentPos = 0;
		fLastPoint = new Point2D.Double(0,0);
		fFillRuleAllowed = fillRuleAllowed;
	}


	private void setPath(String path) {
		
		Vector<String> pathComponents = new Vector<String>();
		int paramListStart = -1;
		for(int i = 0; i < path.length(); i++){
			char c = path.charAt(i);
			
			if(Character.isLetter(c)){
				//start of command
				
				if(paramListStart > -1){
					String substr = path.substring(paramListStart, i).trim();
					if(substr.length() > 0){
						String components[] = substr.split("\\s+");
						for (String comp : components) {
							pathComponents.add(comp.trim());
						}
					}
				}
				pathComponents.add("" + c);
				paramListStart = i + 1;
				continue;
			}
		}
		if(paramListStart > -1){
			String substr = path.substring(paramListStart, path.length()).trim();
			if(substr.length() > 0){
				String components[] = substr.split("\\s+");
				for (String comp : components) {
					pathComponents.add(comp.trim());
				}
			}
		}

		fPathComponents = (String[]) pathComponents.toArray(new String[pathComponents.size()]);	
	}
	
	
	public Double parsePoint(String point) {
		return AWTXPSRenderingUtils.createPoint(point);
	}

	public Vector<? extends IPathFigure> getPathFigures() {
		return fFigures;
	}
	
	public void parseCommands() throws XPSError {
		while(fCurrentPos < fPathComponents.length){
			String currElement = fPathComponents[fCurrentPos++];
			
			Runnable r = getCommandHandler(currElement);
			if(r != null){
				r.run();
				fLastCommand = r;
				continue;
			} else {
				//If we didn't get a command, then we should be at arguments for the next command
				//reverse one position, so we don't skip the args we just read.
				fCurrentPos--;
				fLastCommand.run();
			}
		}
	}
	
	
	
	private Runnable getCommandHandler(String currElement) throws XPSError {
		if(currElement.startsWith("F") || currElement.startsWith("f")){
			if(!fFillRuleAllowed){
				throw new XPSSpecError(2,72, "Fill Rule not permitted for path geometries");
			}
			return FILL_MODE_HANDLER;
		} else if(currElement.equals("m")){
			MOVE_TO_HANDLER.setAbsolute(false);
			return MOVE_TO_HANDLER;
		}else if(currElement.equals("M")){
			MOVE_TO_HANDLER.setAbsolute(true);
			return MOVE_TO_HANDLER;
		} else if(currElement.equals("l")){
			LINE_TO_HANDLER.setAbsolute(false);
			return LINE_TO_HANDLER;
		} else if(currElement.equals("L")){
			LINE_TO_HANDLER.setAbsolute(true);
			return LINE_TO_HANDLER;
		} else if(currElement.equals("h")){
			HORIZONTAL_LINE_TO_HANDLER.setAbsolute(false);
			return HORIZONTAL_LINE_TO_HANDLER;
		} else if(currElement.equals("H")){
			HORIZONTAL_LINE_TO_HANDLER.setAbsolute(true);
			return HORIZONTAL_LINE_TO_HANDLER;
		} else if(currElement.equals("v")){
			VERTICAL_LINE_TO_HANDLER.setAbsolute(false);
			return VERTICAL_LINE_TO_HANDLER;
		} else if(currElement.equals("V")){
			VERTICAL_LINE_TO_HANDLER.setAbsolute(true);
			return VERTICAL_LINE_TO_HANDLER;
		} else if(currElement.equals("c")){
			CUBIC_BEZIER_HANDLER.setAbsolute(false);
			return CUBIC_BEZIER_HANDLER;
		}else if(currElement.equals("C")){
			CUBIC_BEZIER_HANDLER.setAbsolute(true);
			return CUBIC_BEZIER_HANDLER;
		}else if(currElement.equals("q")){
			QUADRATIC_BEZIER_HANDLER.setAbsolute(false);
			return QUADRATIC_BEZIER_HANDLER;
		}else if(currElement.equals("Q")){
			QUADRATIC_BEZIER_HANDLER.setAbsolute(true);
			return QUADRATIC_BEZIER_HANDLER;
		}else if(currElement.equals("s")){
			SMOOTH_CUBIC_BEZIER_HANDLER.setAbsolute(false);
			return SMOOTH_CUBIC_BEZIER_HANDLER;
		}else if(currElement.equals("S")){
			SMOOTH_CUBIC_BEZIER_HANDLER.setAbsolute(true);
			return SMOOTH_CUBIC_BEZIER_HANDLER;
		}else if(currElement.equals("a")){
			ELIPTICAL_ARC_HANDLER.setAbsolute(false);
			return ELIPTICAL_ARC_HANDLER;
		}else if(currElement.equals("A")){
			ELIPTICAL_ARC_HANDLER.setAbsolute(true);
			return ELIPTICAL_ARC_HANDLER;

		}else if(currElement.equals("Z") || currElement.equals("z")){
			return CLOSE_HANDLER;
		} else {
			//not a command. could be arguments.
			return  null;
		}
		

	}



	private static class PolyBeizerSegment implements IPolyBezierSegment {

		private String fPoints;

		public PolyBeizerSegment(String points) {
			fPoints = points;
		}

		public String getPoints() {
			return fPoints;
		}

		public boolean isIsStroked() {
			// TODO Auto-generated method stub
			return false;
		}
		
	}
	
	private static class PolyQuadraticBeizerSegment implements IPolyQuadraticBezierSegment {

		private String fPoints;

		public PolyQuadraticBeizerSegment(String points) {
			fPoints = points;
		}

		public String getPoints() {
			return fPoints;
		}

		public boolean isIsStroked() {
			// TODO Auto-generated method stub
			return false;
		}
		
	}
	
	private static class ArcSegment implements IArcSegment {

		public String getPoint() {
			// TODO Auto-generated method stub
			return null;
		}

		public double getRotationAngle() {
			// TODO Auto-generated method stub
			return 0;
		}

		public String getSize() {
			// TODO Auto-generated method stub
			return null;
		}

		public STSweepDirection getSweepDirection() {
			// TODO Auto-generated method stub
			return null;
		}

		public boolean isIsLargeArc() {
			// TODO Auto-generated method stub
			return false;
		}

		public boolean isIsStroked() {
			// TODO Auto-generated method stub
			return false;
		}
		
	}
	
	private static class PolyLineSegment implements IPolyLineSegment {
		private String fPoint;

		public PolyLineSegment(String point) {
			fPoint = point;
		}

		public String getPoints() {
			return fPoint;
		}

		public boolean isIsStroked() {
			return true;
		}
		
	}



}
