package xps.api.model.document.page;

import java.util.List;

import xps.impl.document.jaxb.CTCPTransform;
import xps.impl.document.jaxb.CTPathFigure;
import xps.impl.document.jaxb.STFillRule;

public interface IPathGeometry extends IPageResource {

	/**
	 * Gets the value of the pathGeometryTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getPathGeometryTransform();

	/**
	 * Gets the value of the pathFigure property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the pathFigure property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getPathFigure().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTPathFigure }
	 * 
	 * 
	 */
	public abstract List<? extends IPathFigure> getPathFigure();

	/**
	 * Gets the value of the figures property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getFigures();

	/**
	 * Gets the value of the fillRule property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STFillRule }
	 *     
	 */
	public abstract STFillRule getFillRule();

	/**
	 * Gets the value of the transform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getTransform();



}