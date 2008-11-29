package javaaxp.swingviewer.textfind;


public interface IFindPanelListener {
	public void findPanelShown();
	public void findPanelClosed();
	public void searchStarted(String searchString);
	public void searchEnded(String searchString, boolean foundMatch);

}
