package com.scrumzilla.client.ui;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;

public class StoryTitlePanel extends Composite {
	
	private final ScrumzillaController fController;
	public final Story fStory;
	private Label fStoryLabel;
	private VerticalPanel fMainPanel;

	public StoryTitlePanel(Story s, ScrumzillaController controller){
		fController = controller;
		fStory = s;
		
		fMainPanel = new VerticalPanel();
		fMainPanel.setStyleName("scrumzilla-storyUI-storyTitlePanel");
		initWidget(fMainPanel);
		setHeight("100%");
		
		
		initUI();
	}
	
	private void initUI() {
		fStoryLabel = new Label(fStory.getStoryName());
		fStoryLabel.setStyleName("scrumzilla-storyUI-storyLabel");
		fMainPanel.add(fStoryLabel);
		
		
		Button removeStory = new Button("Remove Story");
		removeStory.setStyleName("scrumzilla-storyUI-removeStoryButton");
		removeStory.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				fController.removeStory(fStory, new ScrumzillaControllerErrorHandlerAdapter() {
					@Override
					public void storyDoesNotExist(Story story) {
						super.storyDoesNotExist(story);
					}
				});
			}
		});
		fMainPanel.add(removeStory);
	}

}
