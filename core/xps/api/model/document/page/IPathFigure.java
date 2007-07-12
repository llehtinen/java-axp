package xps.api.model.document.page;

import java.util.List;

import xps.impl.document.jaxb.CTArcSegment;
import xps.impl.document.jaxb.CTPolyBezierSegment;
import xps.impl.document.jaxb.CTPolyLineSegment;
import xps.impl.document.jaxb.CTPolyQuadraticBezierSegment;

public interface IPathFigure {

	/**
	 * Gets the value of the polyLineSegmentOrPolyBezierSegmentOrArcSegment property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the polyLineSegmentOrPolyBezierSegmentOrArcSegment property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getPolyLineSegmentOrPolyBezierSegmentOrArcSegment().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTArcSegment }
	 * {@link CTPolyLineSegment }
	 * {@link CTPolyQuadraticBezierSegment }
	 * {@link CTPolyBezierSegment }
	 * 
	 * 
	 */
	public List<ILineSegment> getPolyLineSegmentOrPolyBezierSegmentOrArcSegment();

	/**
	 * Gets the value of the isClosed property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Boolean }
	 *     
	 */
	public boolean isIsClosed();

	/**
	 * Gets the value of the isFilled property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Boolean }
	 *     
	 */
	public boolean isIsFilled();

	/**
	 * Gets the value of the startPoint property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public String getStartPoint();

}