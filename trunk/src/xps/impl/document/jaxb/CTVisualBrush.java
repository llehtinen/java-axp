//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package xps.impl.document.jaxb;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import xps.model.document.page.ITransform;
import xps.model.document.page.IVisual;
import xps.model.document.page.IVisualBrush;


/**
 * <p>Java class for CT_VisualBrush complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_VisualBrush">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06}VisualBrush.Transform" minOccurs="0"/>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06}VisualBrush.Visual" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_VisualBrush"/>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_TileBrush"/>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_Brush"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_VisualBrush", propOrder = {
    "visualBrushTransform",
    "visualBrushVisual"
})
public class CTVisualBrush implements IVisualBrush {

    @XmlElement(name = "VisualBrush.Transform")
    protected CTCPTransform visualBrushTransform;
    @XmlElement(name = "VisualBrush.Visual")
    protected CTCPVisual visualBrushVisual;
    @XmlAttribute(name = "Visual")
    protected String visual;
    @XmlAttribute(name = "TileMode")
    protected STTileMode tileMode;
    @XmlAttribute(name = "Transform")
    protected String transform;
    @XmlAttribute(name = "Viewbox", required = true)
    protected String viewbox;
    @XmlAttribute(name = "ViewboxUnits", required = true)
    protected STViewUnits viewboxUnits;
    @XmlAttribute(name = "Viewport", required = true)
    protected String viewport;
    @XmlAttribute(name = "ViewportUnits", required = true)
    protected STViewUnits viewportUnits;
    @XmlAttribute(name = "Opacity")
    protected Double opacity;
    @XmlAttribute(name = "Key", namespace = "http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key")
    protected String key;

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getVisualBrushTransform()
	 */
    public ITransform getVisualBrushTransform() {
        return visualBrushTransform;
    }

    /**
     * Sets the value of the visualBrushTransform property.
     * 
     * @param value
     *     allowed object is
     *     {@link CTCPTransform }
     *     
     */
    public void setVisualBrushTransform(CTCPTransform value) {
        this.visualBrushTransform = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getVisualBrushVisual()
	 */
    public IVisual getVisualBrushVisual() {
        return visualBrushVisual;
    }

    /**
     * Sets the value of the visualBrushVisual property.
     * 
     * @param value
     *     allowed object is
     *     {@link CTCPVisual }
     *     
     */
    public void setVisualBrushVisual(CTCPVisual value) {
        this.visualBrushVisual = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getVisual()
	 */
    public String getVisual() {
        return visual;
    }

    /**
     * Sets the value of the visual property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVisual(String value) {
        this.visual = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getTileMode()
	 */
    public STTileMode getTileMode() {
        if (tileMode == null) {
            return STTileMode.NONE;
        } else {
            return tileMode;
        }
    }

    /**
     * Sets the value of the tileMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link STTileMode }
     *     
     */
    public void setTileMode(STTileMode value) {
        this.tileMode = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getTransform()
	 */
    public String getTransform() {
        return transform;
    }

    /**
     * Sets the value of the transform property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransform(String value) {
        this.transform = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getViewbox()
	 */
    public String getViewbox() {
        return viewbox;
    }

    /**
     * Sets the value of the viewbox property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setViewbox(String value) {
        this.viewbox = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getViewboxUnits()
	 */
    public STViewUnits getViewboxUnits() {
        if (viewboxUnits == null) {
            return STViewUnits.ABSOLUTE;
        } else {
            return viewboxUnits;
        }
    }

    /**
     * Sets the value of the viewboxUnits property.
     * 
     * @param value
     *     allowed object is
     *     {@link STViewUnits }
     *     
     */
    public void setViewboxUnits(STViewUnits value) {
        this.viewboxUnits = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getViewport()
	 */
    public String getViewport() {
        return viewport;
    }

    /**
     * Sets the value of the viewport property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setViewport(String value) {
        this.viewport = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getViewportUnits()
	 */
    public STViewUnits getViewportUnits() {
        if (viewportUnits == null) {
            return STViewUnits.ABSOLUTE;
        } else {
            return viewportUnits;
        }
    }

    /**
     * Sets the value of the viewportUnits property.
     * 
     * @param value
     *     allowed object is
     *     {@link STViewUnits }
     *     
     */
    public void setViewportUnits(STViewUnits value) {
        this.viewportUnits = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getOpacity()
	 */
    public double getOpacity() {
        if (opacity == null) {
            return  1.0D;
        } else {
            return opacity;
        }
    }

    /**
     * Sets the value of the opacity property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setOpacity(Double value) {
        this.opacity = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IVisualBrush#getKey()
	 */
    public String getKey() {
        return key;
    }

    /**
     * Sets the value of the key property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKey(String value) {
        this.key = value;
    }

}
