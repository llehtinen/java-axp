package com.scrumzilla.client.ui;

import java.util.List;

import com.allen_sauer.gwt.dnd.client.PickupDragController;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.events.AddedStoryEvent;
import com.scrumzilla.client.events.AddedStoryEventHandler;
import com.scrumzilla.client.events.ModelChangedEvent;
import com.scrumzilla.client.events.ModelChangedEventHandler;
import com.scrumzilla.client.events.RemovedStoryEvent;
import com.scrumzilla.client.events.RemovedStoryEventHandler;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task.TaskState;

public class ScrumzillaUI extends Composite implements ModelChangedEventHandler, AddedStoryEventHandler, RemovedStoryEventHandler{
	
	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	
	
	private AddStoryPanel fAddStoryPanel;
	private FlexTable fScrumzillaUITable;
	private PickupDragController fDragController;
	


//	@Inject()
	public ScrumzillaUI(ScrumzillaController controller, ScrumzillaTaskTypeRegistry registry){
		fController = controller;
		fTaskTypeRegistry = registry;
		
		
		fDragController = new PickupDragController(RootPanel.get(), false);
		
		fScrumzillaUITable = new FlexTable();
		fScrumzillaUITable.setStyleName("scrumzilla-ui-storyTable");
		
		initWidget(fScrumzillaUITable);
		initUI();
		
		
		
		fController.getHandlerManager().addHandler(AddedStoryEvent.TYPE, this);
		fController.getHandlerManager().addHandler(RemovedStoryEvent.TYPE, this);
		fController.getHandlerManager().addHandler(ModelChangedEvent.TYPE, this);
	}

	private void initUI() {
		fScrumzillaUITable.insertRow(0);
		Label storyColumnHeaderLabel = new Label("Story");
		storyColumnHeaderLabel.setStyleName("scrumzilla-ui-storyColumnHeader");
		fScrumzillaUITable.setWidget(0, 0, storyColumnHeaderLabel);
		fScrumzillaUITable.setWidget(0, 1, new Label(""));
		int column = 2;
		for(TaskState ts : TaskState.values()){
			Label taskStateColumnHeaderLabel = new Label(ts.toString());
			taskStateColumnHeaderLabel.setStyleName("scrumzilla-ui-taskStateHeader");
			fScrumzillaUITable.setWidget(0, column++, taskStateColumnHeaderLabel);	
		}
		
		
		
		fAddStoryPanel = new AddStoryPanel(fController);
		fScrumzillaUITable.insertRow(1);
		fScrumzillaUITable.setWidget(1, 0, fAddStoryPanel);

		List<Story> sprintStories = fController.getModel().getSprintStories();
		
		addStoryPanel(Story.UNASSIGNED_STORY);

		for (Story story : sprintStories) {
			addStoryPanel(story);
		}

	}
	private void addStoryPanel(Story story) {
		int count = fScrumzillaUITable.getRowCount();
		int row = count - 1;
		fScrumzillaUITable.insertRow(row);
		
		//insert story panels
		fScrumzillaUITable.setWidget(row, 0, new StoryTitlePanel(story, fController));

		fScrumzillaUITable.setWidget(row, 1, new AddTaskToStoryPanel(story, fController, fTaskTypeRegistry));
		
		fController.getModel().getTasksForStory(story);
		int column = 2;
		for(TaskState taskState : TaskState.values()){
			fScrumzillaUITable.setWidget(row, column++, new TasksInStatePanel(story, taskState, fDragController, fController, fTaskTypeRegistry));
		}
		
		//count >= 1, 1 is the add story button
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
		for(int i = 0; i < fScrumzillaUITable.getRowCount(); i++){
			Widget w = fScrumzillaUITable.getWidget(i, 0);
			if(w instanceof StoryTitlePanel){
				StoryTitlePanel sp = (StoryTitlePanel)w;
				if(sp.fStory.equals(e.fStory)){
					fScrumzillaUITable.removeRow(i);
					return;
				}
			}
		}
	}

	public void modelChanged(ModelChangedEvent modelChangedEvent) {
		while(fScrumzillaUITable.getRowCount() > 0){
			fScrumzillaUITable.removeRow(0);	
		}
		
		initUI();
	}
	
	@Override
	protected void onDetach() {
		fController.getHandlerManager().removeHandler(AddedStoryEvent.TYPE, this);
		fController.getHandlerManager().removeHandler(RemovedStoryEvent.TYPE, this);
		fController.getHandlerManager().removeHandler(ModelChangedEvent.TYPE, this);
		
		super.onDetach();
	}



}
