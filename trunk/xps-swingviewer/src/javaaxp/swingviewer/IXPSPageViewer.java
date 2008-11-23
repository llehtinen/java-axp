package javaaxp.swingviewer;


import java.util.Observable;

import javax.swing.JComponent;

public interface IXPSPageViewer {
	public JComponent createViewerComponent();
	public Observable getPageControllerObservables();
	public JComponent createDocumentOutlinePane();
	public JComponent createPageControlPane();
	public JComponent createScaleControlPane();
	public double getScale();
	public void setScale(double scale);
}
