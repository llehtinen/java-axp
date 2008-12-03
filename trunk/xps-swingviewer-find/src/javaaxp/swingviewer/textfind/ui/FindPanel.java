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

package javaaxp.swingviewer.textfind.ui;

import java.awt.Dimension;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javaaxp.swingviewer.textfind.IFindPanelListener;
import javaaxp.swingviewer.textfind.TextFindController;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;

public class FindPanel extends JPanel implements IFindPanelListener {
	
	private JTextField fSearchTextBox;
	private JButton fFindNextButton;
	private TextFindController fController;
	private JButton fFindPreviousButton;
	private JButton fCloseButton;
	private JLabel fSearchingLabel;

	public FindPanel(TextFindController controller) {
		super();
		fController = controller;
		fController.addFindPanelListener(this);
		setLayout(new GridBagLayout());
		init();
	}

	private void init() {
		GridBagConstraints c1 = new GridBagConstraints();
		c1.fill = GridBagConstraints.HORIZONTAL;
		c1.weightx = 1;
		fSearchTextBox = new JTextField(50);
		add(fSearchTextBox, c1);
		fSearchTextBox.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				new Thread("Search Thread"){ //$NON-NLS-1$
					public void run() {
						fController.findNextMatch(fSearchTextBox.getText());						
					}
				}.start();
			}
		});
		
		GridBagConstraints c2 = new GridBagConstraints();
		fFindNextButton = new JButton(Messages.FindPanel_FindNextButton);
		fFindNextButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				new Thread("Search Thread"){ //$NON-NLS-1$
					public void run() {
						fController.findNextMatch(fSearchTextBox.getText());						
					}
				}.start();
			}
		});
		add(fFindNextButton, c2);
		
		fFindPreviousButton = new JButton(Messages.FindPanel_FindPreviousButton);
		fFindPreviousButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				new Thread("Search Thread"){ //$NON-NLS-1$
					public void run() {
						fController.findPrevious(fSearchTextBox.getText());
					}
				}.start();
			}
		});
		add(fFindPreviousButton, c2);

		
		fCloseButton = new JButton(Messages.FindPanel_CloseButtonLabel);
		fCloseButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				fController.closeFindPanel();
			}
		});
		add(fCloseButton, c2);
		
		fSearchingLabel = new JLabel(" "); //$NON-NLS-1$
		c2.gridwidth = GridBagConstraints.REMAINDER;
		fSearchingLabel.setMinimumSize(new Dimension(200, fSearchingLabel.getPreferredSize().height));
		add(fSearchingLabel, c2);
	}

	@Override
	public void findPanelClosed() {
	}

	@Override
	public void findPanelShown() {
		fSearchTextBox.requestFocus();
		
	}

	@Override
	public void searchEnded(String searchString, final boolean foundMatch) {
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				fFindNextButton.setEnabled(true);
				fFindPreviousButton.setEnabled(true);
				if(!foundMatch){
					fSearchingLabel.setText(Messages.FindPanel_NoMatchesLabel);
				} else {
					fSearchingLabel.setText(""); //$NON-NLS-1$
				}
			}
		});
	}

	@Override
	public void searchStarted(final String searchString) {
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				fFindNextButton.setEnabled(false);
				fFindPreviousButton.setEnabled(false);
				fSearchingLabel.setText(Messages.FindPanel_9 + searchString + Messages.FindPanel_10);
			}
		});
	}

}
