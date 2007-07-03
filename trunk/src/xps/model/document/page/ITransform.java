package xps.model.document.page;

import xps.impl.document.jaxb.CTMatrixTransform;

public interface ITransform {

	/**
	 * Gets the value of the matrixTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTMatrixTransform }
	 *     
	 */
	public abstract ITransformMatrix getMatrixTransform();

}