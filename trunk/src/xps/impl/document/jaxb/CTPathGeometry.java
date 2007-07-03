//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package xps.impl.document.jaxb;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import xps.model.document.page.IPathGeometry;
import xps.model.document.page.ITransform;


/**
 * <p>Java class for CT_PathGeometry complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_PathGeometry">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06}PathGeometry.Transform" minOccurs="0"/>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06}PathFigure" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_PathGeometry"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_PathGeometry", propOrder = {
    "pathGeometryTransform",
    "pathFigure"
})
public class CTPathGeometry implements IPathGeometry {

    @XmlElement(name = "PathGeometry.Transform")
    protected CTCPTransform pathGeometryTransform;
    @XmlElement(name = "PathFigure")
    protected List<CTPathFigure> pathFigure;
    @XmlAttribute(name = "Figures")
    protected String figures;
    @XmlAttribute(name = "FillRule")
    protected STFillRule fillRule;
    @XmlAttribute(name = "Transform")
    protected String transform;
    @XmlAttribute(name = "Key", namespace = "http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key")
    protected String key;

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPathGeometry#getPathGeometryTransform()
	 */
    public ITransform getPathGeometryTransform() {
        return pathGeometryTransform;
    }

    /**
     * Sets the value of the pathGeometryTransform property.
     * 
     * @param value
     *     allowed object is
     *     {@link CTCPTransform }
     *     
     */
    public void setPathGeometryTransform(CTCPTransform value) {
        this.pathGeometryTransform = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPathGeometry#getPathFigure()
	 */
    public List<CTPathFigure> getPathFigure() {
        if (pathFigure == null) {
            pathFigure = new ArrayList<CTPathFigure>();
        }
        return this.pathFigure;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPathGeometry#getFigures()
	 */
    public String getFigures() {
        return figures;
    }

    /**
     * Sets the value of the figures property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFigures(String value) {
        this.figures = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPathGeometry#getFillRule()
	 */
    public STFillRule getFillRule() {
        if (fillRule == null) {
            return STFillRule.EVEN_ODD;
        } else {
            return fillRule;
        }
    }

    /**
     * Sets the value of the fillRule property.
     * 
     * @param value
     *     allowed object is
     *     {@link STFillRule }
     *     
     */
    public void setFillRule(STFillRule value) {
        this.fillRule = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPathGeometry#getTransform()
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
	 * @see xps.document.jaxb.IPathGeometry#getKey()
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
