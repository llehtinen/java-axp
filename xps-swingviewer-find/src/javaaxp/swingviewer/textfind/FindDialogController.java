package javaaxp.swingviewer.textfind;

import java.util.ArrayList;

import javaaxp.swingviewer.textfind.XPSFileSearcher.SearchDirection;
import javaaxp.swingviewer.textfind.ui.IFindPanelListener;

public class FindDialogController {
	ArrayList<IFindPanelListener> fListeners = new ArrayList<IFindPanelListener>();
	
	private XPSFileSearcher fSearcher;
	
	public FindDialogController(XPSFileSearcher searcher){
		fSearcher = searcher;
	}
	
	public void findNextMatch(String string) {
		for (IFindPanelListener l : fListeners) {
			l.searchStarted(string);
		}
		boolean foundMatch = fSearcher.search(string, SearchDirection.FORWARD);
		
		for (IFindPanelListener l : fListeners) {
			l.searchEnded(foundMatch);
		}
	}

	public void findPrevious(String string) {
		for (IFindPanelListener l : fListeners) {
			l.searchStarted(string);
		}
		boolean foundMatch = fSearcher.search(string, SearchDirection.BACKWARD);
		
		for (IFindPanelListener l : fListeners) {
			l.searchEnded(foundMatch);
		}
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
