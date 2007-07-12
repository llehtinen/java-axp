package xps.api.model.document;

import java.util.List;

import xps.impl.document.jaxb.CTLinkTarget;

public interface ILinkTargets {

	/**
	 * Gets the value of the linkTarget property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the linkTarget property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getLinkTarget().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTLinkTarget }
	 * 
	 * 
	 */
	public abstract List<? extends ILinkTarget> getLinkTarget();

}