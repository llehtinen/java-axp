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
