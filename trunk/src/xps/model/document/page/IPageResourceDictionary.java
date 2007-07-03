package xps.model.document.page;

import java.util.List;

import xps.impl.document.jaxb.CTCPImageBrush;

public interface IPageResourceDictionary {

	/**
	 * Gets the value of the imageBrushOrLinearGradientBrushOrRadialGradientBrush property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the imageBrushOrLinearGradientBrushOrRadialGradientBrush property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getImageBrushOrLinearGradientBrushOrRadialGradientBrush().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link ITransformMatrix }
	 * {@link ICanvas }
	 * {@link IRadialGradientBrush }
	 * {@link CTCPImageBrush }
	 * {@link IPath }
	 * {@link IPathGeometry }
	 * {@link IVisualBrush }
	 * {@link ILinearGradientBrush }
	 * {@link ISolidColorBrush }
	 * {@link IGlyphs }
	 * 
	 * 
	 */
	public abstract List<IPageResource> getImageBrushOrLinearGradientBrushOrRadialGradientBrush();

	/**
	 * Gets the value of the source property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getSource();

}