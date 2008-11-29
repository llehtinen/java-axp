package javaaxp.swingviewer;

import javax.swing.JComponent;

public interface IXPSPageRenderer {
	public void forceRepaint();
	public JComponent getRendererComponent();
	public void addRenderingExtension(IXPSRenderingExtension x);
	public void removeRenderingExtension(IXPSRenderingExtension x);
	

}
