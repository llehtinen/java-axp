package javaaxp.swingviewer.service.impl;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JPanel;

public class PageScaleControlPane extends JPanel {

	private XPSPageViewer fPageViewer;

	public PageScaleControlPane(XPSPageViewer pageViewer) {
		fPageViewer = pageViewer;
		
		JButton bigger = new JButton("Bigger");
		bigger.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				fPageViewer.setScale(fPageViewer.getScale() * 1.1);
			}
		});
		
		add(bigger, BorderLayout.WEST);
		
		
		JButton smaller = new JButton("Smaller");
		smaller.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				fPageViewer.setScale(fPageViewer.getScale() / 1.1);
			}
		});
		
		add(smaller, BorderLayout.EAST);
	}

}
