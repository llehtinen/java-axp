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
import javax.xml.bind.annotation.XmlType;

import xps.model.document.page.IPolyQuadraticBezierSegment;


/**
 * <p>Java class for CT_PolyQuadraticBezierSegment complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_PolyQuadraticBezierSegment">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_PolyQuadraticBezierSegment"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_PolyQuadraticBezierSegment")
public class CTPolyQuadraticBezierSegment implements IPolyQuadraticBezierSegment {

    @XmlAttribute(name = "IsStroked")
    protected Boolean isStroked;
    @XmlAttribute(name = "Points", required = true)
    protected String points;

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPolyQuadraticBezierSegment#isIsStroked()
	 */
    public boolean isIsStroked() {
        if (isStroked == null) {
            return true;
        } else {
            return isStroked;
        }
    }

    /**
     * Sets the value of the isStroked property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setIsStroked(Boolean value) {
        this.isStroked = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.IPolyQuadraticBezierSegment#getPoints()
	 */
    public String getPoints() {
        return points;
    }

    /**
     * Sets the value of the points property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPoints(String value) {
        this.points = value;
    }

}
