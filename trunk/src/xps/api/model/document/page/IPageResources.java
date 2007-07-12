package xps.api.model.document.page;

import xps.impl.document.jaxb.CTResourceDictionary;

public interface IPageResources {

	/**
	 * Gets the value of the resourceDictionary property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTResourceDictionary }
	 *     
	 */
	public abstract IPageResourceDictionary getResourceDictionary();

}