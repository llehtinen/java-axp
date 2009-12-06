package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.events.AddTaskEventHandler;
import com.scrumzilla.client.events.AddedTaskEvent;
import com.scrumzilla.client.events.RemovedTaskFromStoryEvent;
import com.scrumzilla.client.events.RemovedTaskFromStoryEventHandler;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class StoryPanel extends Composite implements AddTaskEventHandler, RemovedTaskFromStoryEventHandler {

	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	
	public final Story fStory;
	private HorizontalPanel fPanel;
	

	public StoryPanel(ScrumzillaController controller, ScrumzillaTaskTypeRegistry taskTypeRegistry, Story story) {
		fController = controller;
		fTaskTypeRegistry = taskTypeRegistry;
		fStory = story;
		
		fPanel = new HorizontalPanel();
		initWidget(fPanel);
		fPanel.setHeight("100%");
		
		initUI();
		
		fController.getHandlerManager().addHandler(AddedTaskEvent.TYPE, this);
		fController.getHandlerManager().addHandler(RemovedTaskFromStoryEvent.TYPE, this);
	}

	private void initUI() {
		//now we can show tasks for this story.
		List<Task> tasksForStory = fController.getModel().getTasksForStory(fStory);
		//show the task UI for each task
		
		for (Task task : tasksForStory) {
			addTaskToUI(task);
		}
	}

	private void addTaskToUI(Task task) {
		ScrumzillaTaskTypeContribution taskTypeContribution = fTaskTypeRegistry.lookupTaskType(task.getTaskType());
		if(taskTypeContribution != null){
			fPanel.add(getTaskWrapper(taskTypeContribution, task));
		}
	}

	private TaskPanel getTaskWrapper(ScrumzillaTaskTypeContribution taskTypeContribution, final Task task) {
		return new TaskPanel(fController, task, taskTypeContribution);
	}





	public void addedTask(AddedTaskEvent addTaskEvent) {
		Task t = addTaskEvent.fTask;
		if(t.getStory().equals(fStory)){
			addTaskToUI(t);
		}		
	}

	public void removedTaskFromStory(RemovedTaskFromStoryEvent e) {
		if(e.fStoryRemovedFrom.equals(fStory)){
			for(int i = 0; i < fPanel.getWidgetCount(); i++){
				Widget widget = fPanel.getWidget(i);
				if(widget instanceof TaskPanel){
					if(((TaskPanel)widget).getTask().equals(e.fTask)){
						fPanel.remove(widget);
						return;
					}
				}
			}
		}
	}
	

}
