package javaaxp.xps2pdf.service;

import java.io.File;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;

public interface IXPSToPDFConverterService {
	public IXPSToPDFConverter getDocumentConverter(File inputFile) throws XPSError;
	public IXPSToPDFConverter getDocumentConverter(IXPSPageViewer viewer, PageController controller) throws XPSError;
}
