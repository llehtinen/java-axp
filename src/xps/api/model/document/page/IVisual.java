package xps.api.model.document.page;

import xps.impl.document.jaxb.CTCanvas;
import xps.impl.document.jaxb.CTGlyphs;
import xps.impl.document.jaxb.CTPath;

public interface IVisual {

	/**
	 * Gets the value of the path property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTPath }
	 *     
	 */
	public abstract IPath getPath();

	/**
	 * Gets the value of the glyphs property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTGlyphs }
	 *     
	 */
	public abstract IGlyphs getGlyphs();

	/**
	 * Gets the value of the canvas property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCanvas }
	 *     
	 */
	public abstract ICanvas getCanvas();

}