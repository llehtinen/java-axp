package xps.impl.ui;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Observable;
import java.util.Observer;

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
