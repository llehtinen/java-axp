package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.events.AddedStoryEvent;
import com.scrumzilla.client.events.AddedStoryEventHandler;
import com.scrumzilla.client.events.RemovedStoryEvent;
import com.scrumzilla.client.events.RemovedStoryEventHandler;
import com.scrumzilla.client.model.Story;

public class ScrumzillaUI extends Composite implements AddedStoryEventHandler, RemovedStoryEventHandler{
	
	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	
	
	private VerticalPanel fVerticalPanel;
	private AddStoryPanel fAddStoryPanel;
	


//	@Inject()
	public ScrumzillaUI(ScrumzillaController controller, ScrumzillaTaskTypeRegistry registry){
		fController = controller;
		fTaskTypeRegistry = registry;
		
		fVerticalPanel = new VerticalPanel();
		initWidget(fVerticalPanel);
		initComponents();
		
		fController.getHandlerManager().addHandler(AddedStoryEvent.TYPE, this);
		fController.getHandlerManager().addHandler(RemovedStoryEvent.TYPE, this);

		
	}

	private void initComponents() {
		fAddStoryPanel = new AddStoryPanel(fController);
		fVerticalPanel.add(fAddStoryPanel);

		List<Story> sprintStories = fController.getModel().getSprintStories();
		
		addStoryPanel(Story.UNASSIGNED_STORY);

		for (Story story : sprintStories) {
			addStoryPanel(story);
		}

	}
	private void addStoryPanel(Story story) {
		int count = fVerticalPanel.getWidgetCount();
		//count >= 1, 1 is the add story button
		fVerticalPanel.insert(new StoryPanel(fController, fTaskTypeRegistry, story), count - 1);
	}


	protected void addStory() {
		Story s = new Story();
		s.setStoryName("New Story");
		fController.addStory(s, new ScrumzillaControllerErrorHandlerAdapter() {
		});
	}

	public void addedStory(AddedStoryEvent e) {
		addStoryPanel(e.fStory);
	}

	public void storyRemoved(RemovedStoryEvent e) {
		for(int i = 0; i < fVerticalPanel.getWidgetCount(); i++){
			Widget w = fVerticalPanel.getWidget(i);
			if(w instanceof StoryPanel){
				StoryPanel sp = (StoryPanel)w;
				if(sp.fStory.equals(e.fStory)){
					fVerticalPanel.remove(w);
					return;
				}
			}
		}
	}


}
