package javaaxp.xps2pdf.service;

import java.io.InputStream;
import java.io.OutputStream;

import javaaxp.core.service.XPSError;

public interface IXPSToPDFConverter {
	public void appendToPDF(InputStream existingPDF, OutputStream output);
	public void covertToPDF(OutputStream ouput) throws XPSError;
}
