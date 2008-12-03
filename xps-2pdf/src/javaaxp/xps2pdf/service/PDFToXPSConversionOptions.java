package javaaxp.xps2pdf.service;

public class PDFToXPSConversionOptions {
	
	public static class PageRange {
		public final int fStartPageNum;
		public final int fEndPageNum;
		public PageRange(int endPageNum, int startPageNum) {
			super();
			fEndPageNum = endPageNum;
			fStartPageNum = startPageNum;
		}
	}
	
	
	public PageRange fPageRange;

}
