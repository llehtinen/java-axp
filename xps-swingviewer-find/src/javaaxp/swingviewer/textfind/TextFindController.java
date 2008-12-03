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

package javaaxp.swingviewer.textfind;

import java.util.ArrayList;

import javaaxp.swingviewer.textfind.impl.SearchDirection;
import javaaxp.swingviewer.textfind.impl.XPSFileSearcher;

public class TextFindController {
	ArrayList<IFindPanelListener> fListeners = new ArrayList<IFindPanelListener>();
	
	private XPSFileSearcher fSearcher;
	
	public TextFindController(XPSFileSearcher searcher){
		fSearcher = searcher;
	}
	
	public void findNextMatch(String string) {
		fSearcher.search(this, string, SearchDirection.FORWARD);
	}

	public void fireSearchEnded(String searchString, boolean foundMatch) {
		for (IFindPanelListener l : fListeners) {
			l.searchEnded(searchString, foundMatch);
		}
	}

	public void fireSearchStarted(String string) {
		for (IFindPanelListener l : fListeners) {
			l.searchStarted(string);
		}
	}

	public void findPrevious(String string) {
		fSearcher.search(this, string, SearchDirection.BACKWARD);
	}

	public void addFindPanelListener(IFindPanelListener l) {
		fListeners.add(l);
		
	}
	
	public void removeFindPanelListenr(IFindPanelListener l){
		fListeners.remove(l);
	}

	public void closeFindPanel() {
		fSearcher.findPanelClosed();
		for (IFindPanelListener l : fListeners) {
			l.findPanelClosed();
		}
	}

	public void findPanelShown() {
		for (IFindPanelListener l : fListeners) {
			l.findPanelShown();
		}
	}

}
