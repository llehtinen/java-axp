package javaaxp.swingviewer.textfind.matchhighlighter;

import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.textfind.IFindPanelListener;

import javax.swing.SwingUtilities;


public class GlyphHighlighterListener implements IFindPanelListener {

	private GlyphHighlighter fGlyphHighlighter;
	private IXPSPageViewer fViewer;

	public GlyphHighlighterListener(IXPSPageViewer viewer) {
		fViewer = viewer;
	}
	
	@Override
	public void findPanelClosed() {
		removeExistingGlyphHighlighter();			
	}

	@Override
	public void findPanelShown() {
		// TODO Auto-generated method stub

	}

	@Override
	public void searchEnded(String searchString, boolean foundMatch) {
		removeExistingGlyphHighlighter();
		if(foundMatch){
			setupHighlightRenderer(searchString);
		}

	}

	@Override
	public void searchStarted(String searchString) {
	}
	
	private void setupHighlightRenderer(String searchString) {
		if(fGlyphHighlighter != null){
			throw new IllegalArgumentException();
		}
		fGlyphHighlighter = new GlyphHighlighter(searchString);
		fViewer.getPageRenderer().addRenderingExtension(fGlyphHighlighter);
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				fViewer.getPageRenderer().forceRepaint();
			}
		});
	}
	
	private void removeExistingGlyphHighlighter() {
		if(fGlyphHighlighter != null){
			fViewer.getPageRenderer().removeRenderingExtension(fGlyphHighlighter);
			SwingUtilities.invokeLater(new Runnable() {
				@Override
				public void run() {
					fViewer.getPageRenderer().forceRepaint();
				}
			});
			
			fGlyphHighlighter = null;
		}
	}

}
