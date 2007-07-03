package xps.model.document.page;

import java.util.List;

import xps.impl.document.jaxb.CTCPBrush;
import xps.impl.document.jaxb.CTCPGeometry;
import xps.impl.document.jaxb.CTCPResources;
import xps.impl.document.jaxb.CTCPTransform;
import xps.impl.document.jaxb.CTCanvas;
import xps.impl.document.jaxb.CTGlyphs;
import xps.impl.document.jaxb.CTPath;
import xps.impl.document.jaxb.STEdgeMode;

public interface ICanvas extends IPageResource {

	/**
	 * Gets the value of the canvasResources property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPResources }
	 *     
	 */
	public abstract IPageResources getCanvasResources();

	/**
	 * Gets the value of the canvasRenderTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getCanvasRenderTransform();

	/**
	 * Gets the value of the canvasClip property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPGeometry }
	 *     
	 */
	public abstract IGeometry getCanvasClip();

	/**
	 * Gets the value of the canvasOpacityMask property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPBrush }
	 *     
	 */
	public abstract IBrush getCanvasOpacityMask();

	/**
	 * Gets the value of the pathOrGlyphsOrCanvas property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the pathOrGlyphsOrCanvas property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getPathOrGlyphsOrCanvas().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTPath }
	 * {@link CTCanvas }
	 * {@link CTGlyphs }
	 * 
	 * 
	 */
	public abstract List<Object> getPathOrGlyphsOrCanvas();

	/**
	 * Gets the value of the clip property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getClip();

	/**
	 * Gets the value of the fixedPageNavigateUri property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getFixedPageNavigateUri();

	/**
	 * Gets the value of the name property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getName();

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
	 * Gets the value of the opacityMask property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getOpacityMask();

	/**
	 * Gets the value of the renderOptionsEdgeMode property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STEdgeMode }
	 *     
	 */
	public abstract STEdgeMode getRenderOptionsEdgeMode();

	/**
	 * Gets the value of the renderTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getRenderTransform();

	/**
	 * Gets the value of the lang property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getLang();

	/**
	 * Gets the value of the automationPropertiesHelpText property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getAutomationPropertiesHelpText();

	/**
	 * Gets the value of the automationPropertiesName property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getAutomationPropertiesName();

}