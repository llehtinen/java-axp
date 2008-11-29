package javaaxp.swingviewer.textfind.ui;


public interface IFindPanelListener {
	public void findPanelShown();
	public void findPanelClosed();
	public void searchStarted(String searchString);
	public void searchEnded(boolean foundMatch);

}
