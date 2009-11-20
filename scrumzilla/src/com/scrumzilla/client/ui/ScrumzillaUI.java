package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;
import com.scrumzilla.client.controller.AddStoryException;
import com.scrumzilla.client.controller.IScrumzillaChangeListener;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.model.Story;

public class ScrumzillaUI extends Composite implements IScrumzillaChangeListener {
	
	private ScrumzillaController fController;
	private VerticalPanel fVerticalPanel;
	private Button fAddStoryButton;

	@Inject()
	public ScrumzillaUI(ScrumzillaController controller){
		fController = controller;
		
		fVerticalPanel = new VerticalPanel();
		initWidget(fVerticalPanel);
		
		fController.addChangeListener(this);
		
		initComponents();
		
	}

	private void initComponents() {
		List<Story> sprintStories = fController.getModel().getSprintStories();
		for (Story story : sprintStories) {
			fVerticalPanel.add(new StoryPanel(fController, story));
		}
		
		fAddStoryButton = new Button("Add Story");
		fAddStoryButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				addStory();
			}
		});
		fVerticalPanel.add(fAddStoryButton);
		
	}

	protected void addStory() {
		Story s = new Story();
		s.setStoryName("New Story");
		try {
			fController.addStory(s);
		} catch (AddStoryException e) {
			
		}
	}

	public void storiesChanged() {
		fVerticalPanel.clear();
		initComponents();
	}

}
