package xps.api.model.document;

import java.util.List;

import xps.impl.document.jaxb.CTStoryFragmentReference;

public interface IStory {

	/**
	 * Gets the value of the storyFragmentReference property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the storyFragmentReference property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getStoryFragmentReference().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTStoryFragmentReference }
	 * 
	 * 
	 */
	public abstract List<CTStoryFragmentReference> getStoryFragmentReference();

	/**
	 * Gets the value of the storyName property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getStoryName();

	/**
	 * Sets the value of the storyName property.
	 * 
	 * @param value
	 *     allowed object is
	 *     {@link String }
	 *     
	 */
	public abstract void setStoryName(String value);

}