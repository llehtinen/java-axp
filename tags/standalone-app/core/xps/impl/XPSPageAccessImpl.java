package xps.impl;

import xps.api.IXPSAccess;
import xps.api.IXPSPageAccess;
import xps.api.XPSError;
import xps.api.XPSSpecError;
import xps.api.model.document.IDocumentReference;
import xps.api.model.document.IFixedDocument;
import xps.api.model.document.page.IFixedPage;

public class XPSPageAccessImpl implements IXPSPageAccess {

	private IXPSAccess fXPSAccess;
	private int fDocNum;
	private IDocumentReference fDocumentReference;
	private IFixedDocument fFixedDocument;

	public XPSPageAccessImpl(IXPSAccess access, int docNum) throws XPSError {
		fXPSAccess = access;
		fDocNum = docNum;
		fDocumentReference = access.getFileAccess().getFixedDocumentSequence().getDocumentReference().get(docNum);
		fFixedDocument = fXPSAccess.getFileAccess().getFixedDocument(fDocumentReference);
	}

	public int getFirstPageNum() {
		return 0;
	}

	public int getLastPageNum() {
		return fFixedDocument.getPageContent().size() - 1;	
	}

	public int getPageNumberWithLinkTarget(String outlineTarget) throws XPSError {
		return fXPSAccess.getFileAccess().getPageNumberWithLinkTarget(outlineTarget, fDocNum);
	}

	public IFixedPage getPage(int pageNum) throws XPSSpecError, XPSError {
		return fXPSAccess.getFileAccess().loadPageFromDocument(fDocNum, pageNum);
	}

	public IDocumentReference getDocumentReference() {
		return fDocumentReference;
	}
}
