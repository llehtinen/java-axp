package javaaxp.core.service;

import java.awt.image.BufferedImage;

import javaaxp.core.service.model.document.IDocumentReference;
import javaaxp.core.service.model.document.IDocumentStructure;
import javaaxp.core.service.model.document.IFixedDocument;
import javaaxp.core.service.model.document.IFixedDocumentSequence;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IPageContent;
import javaaxp.core.service.model.document.page.IPageResourceDictionary;


public interface IXPSFileAccess {
	public IFixedDocumentSequence getFixedDocumentSequence() throws XPSError;
	public IFixedDocument getFixedDocument(IDocumentReference ref) throws XPSError;
	public IFixedPage getFixedPage(IDocumentReference ref, IPageContent page) throws XPSError;
	public IPageResourceDictionary getResourceDictionary(String source, IDocumentReference docRef) throws XPSError;
	public byte[] getFontData(String uri, IDocumentReference document)throws XPSError;
	public BufferedImage getImageResource(String uri, IDocumentReference document) throws XPSError;
	public IDocumentStructure loadDocumentStructure(int docNum) throws XPSError, XPSSpecError;
	public int getPageNumberWithLinkTarget(String outlineTarget, int docNum) throws XPSError;
	public IFixedPage loadPageFromDocument(int docNum, int pageNum) throws XPSError, XPSSpecError;

}
