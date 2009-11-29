package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.IScrumzillaChangeListener;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;

public class ScrumzillaUI extends Composite implements IScrumzillaChangeListener {
	
	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	
	
	private VerticalPanel fVerticalPanel;
	private AddStoryPanel fAddStoryPanel;
	


	@Inject()
	public ScrumzillaUI(ScrumzillaController controller, ScrumzillaTaskTypeRegistry registry){
		fController = controller;
		fTaskTypeRegistry = registry;
		
		fVerticalPanel = new VerticalPanel();
		initWidget(fVerticalPanel);
		
		fController.addChangeListener(this);
		
		initComponents();
		
	}

	private void initComponents() {
		List<Story> sprintStories = fController.getModel().getSprintStories();
		for (Story story : sprintStories) {
			fVerticalPanel.add(new StoryPanel(fController, fTaskTypeRegistry, story));
		}

		
		fAddStoryPanel = new AddStoryPanel(fController);
		fVerticalPanel.add(fAddStoryPanel);
		
	}

	protected void addStory() {
		Story s = new Story();
		s.setStoryName("New Story");
		fController.addStory(s, new ScrumzillaControllerErrorHandlerAdapter() {
		});
	}

	public void modelChanged() {
		fVerticalPanel.clear();
		initComponents();
	}

}
