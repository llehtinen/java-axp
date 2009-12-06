package com.scrumzilla.client.ui;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;

public class StoryTitlePanel extends Composite {
	
	private final ScrumzillaController fController;
	public final Story fStory;
	private DecoratorPanel fWidget;
	private Label fStoryLabel;

	public StoryTitlePanel(Story s, ScrumzillaController controller){
		fController = controller;
		fStory = s;
		
		fWidget = new DecoratorPanel();
		initWidget(fWidget);
		
		initUI();
	}
	
	private void initUI() {
		VerticalPanel vp = new VerticalPanel();
		
		fStoryLabel = new Label(fStory.getStoryName());
		fStoryLabel.setStyleName("scrumzilla-storyUI-storyLabel");
		vp.add(fStoryLabel);
		
		
		Button removeStory = new Button("Remove Story");
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
		removeStory.setStyleName("scrumzilla-storyUI-removeStoryButton");
		vp.add(removeStory);
		fWidget.add(vp);
	}

}
