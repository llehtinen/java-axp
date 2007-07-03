package xps.impl.document.jaxb.util;

import java.io.InputStream;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import xps.XPSSpecError;

public class XPSJAXBElementProducer {
	
	
	
	public static <T> T createXPSElement(InputStream in) throws XPSSpecError  {
		try {
			JAXBContext jc = JAXBContext.newInstance("xps.impl.document.jaxb");
			Unmarshaller unmarshaller = jc.createUnmarshaller();
			JAXBElement<T>  ref = (JAXBElement<T>) unmarshaller.unmarshal(in);
			return ref.getValue();
		} catch (JAXBException e) {
			e.printStackTrace();
			throw new XPSSpecError(2,69, "XPS Element does not conform to schema");
		}
	}

}
