package javaaxp.swingviewer;

import javax.swing.JComponent;

public interface IXPSPageRenderer {
	public JComponent getRendererComponent();
	public void addRenderingExtension(IXPSRenderingExtension x);
	public void removeRenderingExtension(IXPSRenderingExtension x);
	

}
