package xps.api.model.document.page;

import xps.api.model.document.IGradientStops;
import xps.impl.document.jaxb.CTCPGradientStops;
import xps.impl.document.jaxb.CTCPTransform;
import xps.impl.document.jaxb.STClrIntMode;
import xps.impl.document.jaxb.STMappingMode;
import xps.impl.document.jaxb.STSpreadMethod;

public interface IRadialGradientBrush extends IPageResource {

	/**
	 * Gets the value of the radialGradientBrushTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getRadialGradientBrushTransform();

	/**
	 * Gets the value of the radialGradientBrushGradientStops property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPGradientStops }
	 *     
	 */
	public abstract IGradientStops getRadialGradientBrushGradientStops();

	/**
	 * Gets the value of the center property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getCenter();

	/**
	 * Gets the value of the gradientOrigin property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getGradientOrigin();

	/**
	 * Gets the value of the radiusX property.
	 * 
	 */
	public abstract double getRadiusX();

	/**
	 * Gets the value of the radiusY property.
	 * 
	 */
	public abstract double getRadiusY();

	/**
	 * Gets the value of the transform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getTransform();

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

}