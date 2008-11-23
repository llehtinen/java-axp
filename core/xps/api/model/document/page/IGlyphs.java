package xps.api.model.document.page;

import xps.impl.document.jaxb.CTCPBrush;
import xps.impl.document.jaxb.CTCPGeometry;
import xps.impl.document.jaxb.CTCPTransform;
import xps.impl.document.jaxb.STStyleSimulations;

public interface IGlyphs extends IPageResource {

	/**
	 * Gets the value of the glyphsRenderTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPTransform }
	 *     
	 */
	public abstract ITransform getGlyphsRenderTransform();

	/**
	 * Gets the value of the glyphsClip property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPGeometry }
	 *     
	 */
	public abstract IGeometry getGlyphsClip();

	/**
	 * Gets the value of the glyphsOpacityMask property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPBrush }
	 *     
	 */
	public abstract IBrush getGlyphsOpacityMask();

	/**
	 * Gets the value of the glyphsFill property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link CTCPBrush }
	 *     
	 */
	public abstract IBrush getGlyphsFill();

	/**
	 * Gets the value of the bidiLevel property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Integer }
	 *     
	 */
	public abstract int getBidiLevel();

	/**
	 * Gets the value of the caretStops property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getCaretStops();

	/**
	 * Gets the value of the clip property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getClip();

	/**
	 * Gets the value of the deviceFontName property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getDeviceFontName();

	/**
	 * Gets the value of the fill property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getFill();

	/**
	 * Gets the value of the fixedPageNavigateUri property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getFixedPageNavigateUri();

	/**
	 * Gets the value of the fontRenderingEmSize property.
	 * 
	 */
	public abstract double getFontRenderingEmSize();

	/**
	 * Gets the value of the fontUri property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getFontUri();

	/**
	 * Gets the value of the indices property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getIndices();

	/**
	 * Gets the value of the isSideways property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Boolean }
	 *     
	 */
	public abstract boolean isIsSideways();

	/**
	 * Gets the value of the name property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getName();

	/**
	 * Gets the value of the opacity property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link Double }
	 *     
	 */
	public abstract double getOpacity();

	/**
	 * Gets the value of the opacityMask property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getOpacityMask();

	/**
	 * Gets the value of the originX property.
	 * 
	 */
	public abstract double getOriginX();

	/**
	 * Gets the value of the originY property.
	 * 
	 */
	public abstract double getOriginY();

	/**
	 * Gets the value of the renderTransform property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getRenderTransform();

	/**
	 * Gets the value of the styleSimulations property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link STStyleSimulations }
	 *     
	 */
	public abstract STStyleSimulations getStyleSimulations();

	/**
	 * Gets the value of the unicodeString property.
	 * 
	 * @return
	 *     possible object is
	 *     {@link String }
	 *     
	 */
	public abstract String getUnicodeString();

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