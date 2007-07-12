package xps.api.model.document.page;

import xps.impl.document.jaxb.STSweepDirection;

public interface IArcSegment extends ILineSegment{

	/**
	 * Gets the value of the isLargeArc property.
	 * 
	 */
	public abstract boolean isIsLargeArc();

	/**
	 * Gets the value of the point property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getPoint();

	/**
	 * Gets the value of the rotationAngle property.
	 * 
	 */
	public abstract double getRotationAngle();

	/**
	 * Gets the value of the size property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getSize();

	/**
	 * Gets the value of the sweepDirection property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STSweepDirection }
	 *     
	 */
	public abstract STSweepDirection getSweepDirection();

}