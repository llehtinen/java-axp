package xps.model.document;

import java.util.List;

import xps.impl.document.jaxb.CTGradientStop;
import xps.model.document.page.IGradientStop;

public interface IGradientStops {

	/**
	 * Gets the value of the gradientStop property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list,
	 * not a snapshot. Therefore any modification you make to the
	 * returned list will be present inside the JAXB object.
	 * This is why there is not a <CODE>set</CODE> method for the gradientStop property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * <pre>
	 *    getGradientStop().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link CTGradientStop }
	 * 
	 * 
	 */
	public abstract List<? extends IGradientStop> getGradientStop();

}