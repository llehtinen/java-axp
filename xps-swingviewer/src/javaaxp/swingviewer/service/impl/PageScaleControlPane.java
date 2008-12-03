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
