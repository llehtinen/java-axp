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
import java.util.Observable;
import java.util.Observer;


import javaaxp.swingviewer.PageController;

import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class PageControlPane extends JPanel implements Observer {

	private PageController fPageViewer;
	private JTextField fPageNumText;

	public PageControlPane(PageController pageController) {
		pageController.addObserver(this);
		
		fPageViewer = pageController;
		
		JButton prev = new JButton("Previous");
		prev.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				fPageViewer.previousPage();
			}
		});
		
		add(prev, BorderLayout.WEST);
		
		
		fPageNumText = new JTextField();
		fPageNumText.setColumns(20);
		fPageNumText.setText("" + fPageViewer.getPageNum());
		fPageNumText.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try { 
					int i = Integer.parseInt(fPageNumText.getText());
					fPageViewer.setPage(i);
				} catch (NumberFormatException e1){
					fPageNumText.setText("" + fPageViewer.getPageNum());
				}
				
			}
		});
		
		add(fPageNumText, BorderLayout.CENTER);
		
		JButton next = new JButton("Next");
		next.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				fPageViewer.nextPage();
			}
		});
		
		add(next, BorderLayout.EAST);	
		
		
	}

	public void update(Observable o, Object arg) {
		fPageNumText.setText("" + fPageViewer.getPageNum());
	}

}
