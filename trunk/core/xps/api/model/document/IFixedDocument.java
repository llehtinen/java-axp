package xps.api.model.document;

import java.util.List;

import xps.api.model.document.page.IPageContent;
import xps.impl.document.jaxb.CTPageContent;

public interface IFixedDocument {

	/**
	 * Gets the value of the pageContent property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the pageContent property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getPageContent().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTPageContent }
	 * 
	 * 
	 */
	public abstract List<? extends IPageContent> getPageContent();

}