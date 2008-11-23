package javaaxp.core.service.model.document;

import java.util.List;

public interface IDocumentStructure {

	/**
	 * Gets the value of the documentStructureOutline property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPOutline }
	 *     
	 */
	public abstract IOutline getDocumentStructureOutline();

	/**
	 * Gets the value of the story property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the story property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getStory().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTStory }
	 * 
	 * 
	 */
	public abstract List<? extends IStory> getStory();

}