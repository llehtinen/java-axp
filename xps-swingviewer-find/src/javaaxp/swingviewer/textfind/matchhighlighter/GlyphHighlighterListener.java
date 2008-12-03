/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

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
