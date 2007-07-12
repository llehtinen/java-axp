package xps.api.model.document;

import java.util.List;

import xps.impl.document.jaxb.CTOutlineEntry;

public interface IDocumentOutline {

	/**
	 * Gets the value of the outlineEntry property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the outlineEntry property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getOutlineEntry().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTOutlineEntry }
	 * 
	 * 
	 */
	public abstract List<? extends IOutlineEntry> getOutlineEntry();

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