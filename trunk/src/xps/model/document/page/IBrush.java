package xps.model.document.page;

import xps.impl.document.jaxb.CTCPImageBrush;
import xps.impl.document.jaxb.CTLinearGradientBrush;
import xps.impl.document.jaxb.CTRadialGradientBrush;
import xps.impl.document.jaxb.CTSolidColorBrush;
import xps.impl.document.jaxb.CTVisualBrush;

public interface IBrush {

	/**
	 * Gets the value of the imageBrush property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPImageBrush }
	 *     
	 */
	public abstract IImageBrush getImageBrush();

	/**
	 * Gets the value of the linearGradientBrush property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTLinearGradientBrush }
	 *     
	 */
	public abstract ILinearGradientBrush getLinearGradientBrush();

	/**
	 * Gets the value of the radialGradientBrush property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTRadialGradientBrush }
	 *     
	 */
	public abstract IRadialGradientBrush getRadialGradientBrush();

	/**
	 * Gets the value of the solidColorBrush property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTSolidColorBrush }
	 *     
	 */
	public abstract ISolidColorBrush getSolidColorBrush();

	/**
	 * Gets the value of the visualBrush property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTVisualBrush }
	 *     
	 */
	public abstract IVisualBrush getVisualBrush();

}