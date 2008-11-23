package javaaxp.core.service.model.document.page;


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