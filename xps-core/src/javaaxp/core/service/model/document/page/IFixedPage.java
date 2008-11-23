package javaaxp.core.service.model.document.page;

import java.util.List;

public interface IFixedPage {

	/**
	 * Gets the value of the fixedPageResources property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPResources }
	 *     
	 */
	public abstract IPageResources getFixedPageResources();

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
	 * {@link CTGlyphs }
	 * {@link CTCanvas }
	 * 
	 * 
	 */
	public abstract List<Object> getPathOrGlyphsOrCanvas();

	/**
	 * Gets the value of the bleedBox property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getBleedBox();

	/**
	 * Gets the value of the contentBox property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getContentBox();

	/**
	 * Gets the value of the height property.
	 * 
	 */
	public abstract double getHeight();

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
	 * Gets the value of the width property.
	 * 
	 */
	public abstract double getWidth();

	/**
	 * Gets the value of the lang property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getLang();

}