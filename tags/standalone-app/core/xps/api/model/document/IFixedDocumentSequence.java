package xps.api.model.document;

import java.util.List;

import xps.impl.document.jaxb.CTDocumentReference;

public interface IFixedDocumentSequence {

	/**
	 * Gets the value of the documentReference property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the documentReference property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getDocumentReference().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTDocumentReference }
	 * 
	 * 
	 */
	public abstract List<? extends IDocumentReference> getDocumentReference();

}