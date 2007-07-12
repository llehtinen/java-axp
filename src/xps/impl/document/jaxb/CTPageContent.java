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

import xps.api.model.document.ILinkTargets;
import xps.api.model.document.page.IPageContent;


/**
 * <p>Java class for CT_PageContent complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_PageContent">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06}PageContent.LinkTargets" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_PageContent"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_PageContent", propOrder = {
    "pageContentLinkTargets"
})
public class CTPageContent implements IPageContent {

    @XmlElement(name = "PageContent.LinkTargets")
    protected CTCPLinkTargets pageContentLinkTargets;
    @XmlAttribute(name = "Height")
    protected Double height;
    @XmlAttribute(name = "Source", required = true)
    protected String source;
    @XmlAttribute(name = "Width")
    protected Double width;

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPageContent#getPageContentLinkTargets()
	 */
    public ILinkTargets getPageContentLinkTargets() {
        return pageContentLinkTargets;
    }

    /**
     * Sets the value of the pageContentLinkTargets property.
     * 
     * @param value
     *     allowed object is
     *     {@link CTCPLinkTargets }
     *     
     */
    public void setPageContentLinkTargets(CTCPLinkTargets value) {
        this.pageContentLinkTargets = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPageContent#getHeight()
	 */
    public Double getHeight() {
        return height;
    }

    /**
     * Sets the value of the height property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setHeight(Double value) {
        this.height = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPageContent#getSource()
	 */
    public String getSource() {
        return source;
    }

    /**
     * Sets the value of the source property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSource(String value) {
        this.source = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPageContent#getWidth()
	 */
    public Double getWidth() {
        return width;
    }

    /**
     * Sets the value of the width property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setWidth(Double value) {
        this.width = value;
    }

}
