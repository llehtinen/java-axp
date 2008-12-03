package javaaxp.xps2pdf.service.impl;

import java.io.File;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.xps2pdf.service.IXPSToPDFConverter;
import javaaxp.xps2pdf.service.IXPSToPDFConverterService;

public class XPSToPDFServiceImpl implements IXPSToPDFConverterService {
	private ISwingViewerService fSwingViewerService;

	public XPSToPDFServiceImpl(ISwingViewerService swingViewerService) {
		fSwingViewerService = swingViewerService;
	}

	@Override
	public IXPSToPDFConverter getDocumentConverter(File inputFile) throws XPSError {
		return new PDFConverterImpl(fSwingViewerService, inputFile);
	}
	
	public IXPSToPDFConverter getDocumentConverter(IXPSPageViewer viewer, PageController controller) throws XPSError {
		return new PDFConverterImpl(viewer, controller);
	}

}

