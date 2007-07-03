package xps.model.document.page;

import xps.impl.document.jaxb.CTCPGradientStops;
import xps.impl.document.jaxb.CTCPTransform;
import xps.impl.document.jaxb.STClrIntMode;
import xps.impl.document.jaxb.STMappingMode;
import xps.impl.document.jaxb.STSpreadMethod;
import xps.model.document.IGradientStops;

public interface ILinearGradientBrush extends IPageResource {

	/**
	 * Gets the value of the linearGradientBrushTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getLinearGradientBrushTransform();

	/**
	 * Gets the value of the linearGradientBrushGradientStops property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPGradientStops }
	 *     
	 */
	public abstract IGradientStops getLinearGradientBrushGradientStops();

	/**
	 * Gets the value of the colorInterpolationMode property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STClrIntMode }
	 *     
	 */
	public abstract STClrIntMode getColorInterpolationMode();

	/**
	 * Gets the value of the mappingMode property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STMappingMode }
	 *     
	 */
	public abstract STMappingMode getMappingMode();

	/**
	 * Gets the value of the spreadMethod property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STSpreadMethod }
	 *     
	 */
	public abstract STSpreadMethod getSpreadMethod();

	/**
	 * Gets the value of the opacity property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Double }
	 *     
	 */
	public abstract double getOpacity();

	/**
	 * Gets the value of the endPoint property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getEndPoint();

	/**
	 * Gets the value of the startPoint property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getStartPoint();

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