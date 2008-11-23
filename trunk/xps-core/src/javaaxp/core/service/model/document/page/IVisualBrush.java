package javaaxp.core.service.model.document.page;


public interface IVisualBrush extends IPageResource {

	/**
	 * Gets the value of the visualBrushTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getVisualBrushTransform();

	/**
	 * Gets the value of the visualBrushVisual property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPVisual }
	 *     
	 */
	public abstract IVisual getVisualBrushVisual();

	/**
	 * Gets the value of the visual property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getVisual();

	/**
	 * Gets the value of the tileMode property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STTileMode }
	 *     
	 */
	public abstract STTileMode getTileMode();

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
	 * Gets the value of the viewbox property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getViewbox();

	/**
	 * Gets the value of the viewboxUnits property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STViewUnits }
	 *     
	 */
	public abstract STViewUnits getViewboxUnits();

	/**
	 * Gets the value of the viewport property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getViewport();

	/**
	 * Gets the value of the viewportUnits property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STViewUnits }
	 *     
	 */
	public abstract STViewUnits getViewportUnits();

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