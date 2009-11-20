package com.scrumzilla.client.ui;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.model.Story;

public class StoryPanel extends Composite {

	private ScrumzillaController fController;
	private Story fStory;
	private HorizontalPanel fPanel;
	private Label fStoryLabel;
	private Button fAddTaskButton;

	public StoryPanel(ScrumzillaController controller, Story story) {
		fController = controller;
		fStory = story;
		
		fPanel = new HorizontalPanel();
		initWidget(fPanel);
		
		initComponent();
	}

	private void initComponent() {
		fStoryLabel = new Label(fStory.getStoryName());
		fPanel.add(fStoryLabel);
		fAddTaskButton = new Button("Add Task");
		fPanel.add(fAddTaskButton);
	}
	

}
