package javaaxp.core.service.impl;

import javaaxp.core.service.IXPSFileAccess;
import javaaxp.core.service.IXPSPageAccess;
import javaaxp.core.service.XPSError;
import javaaxp.core.service.XPSSpecError;
import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.IFixedDocument;
import javaaxp.core.service.model.document.page.IFixedPage;

public class XPSPageAccessImpl implements IXPSPageAccess {

	private IXPSFileAccess fXPSFileAccess;
	private int fDocNum;
	private IDocumentReference fDocumentReference;
	private IFixedDocument fFixedDocument;

	public XPSPageAccessImpl(IXPSFileAccess fileAccess, int docNum) throws XPSError {
		fXPSFileAccess = fileAccess;
		fDocNum = docNum;
		fDocumentReference = fileAccess.getFixedDocumentSequence().getDocumentReference().get(docNum);
		fFixedDocument = fileAccess.getFixedDocument(fDocumentReference);
	}

	public int getFirstPageNum() {
		return 0;
	}

	public int getLastPageNum() {
		return fFixedDocument.getPageContent().size() - 1;	
	}

	public int getPageNumberWithLinkTarget(String outlineTarget) throws XPSError {
		return fXPSFileAccess.getPageNumberWithLinkTarget(outlineTarget, fDocNum);
	}

	public IFixedPage getPage(int pageNum) throws XPSSpecError, XPSError {
		return fXPSFileAccess.loadPageFromDocument(fDocNum, pageNum);
	}

	public IDocumentReference getDocumentReference() {
		return fDocumentReference;
	}
}
