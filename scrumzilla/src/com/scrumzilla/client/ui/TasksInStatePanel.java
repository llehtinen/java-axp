package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.events.AddTaskEventHandler;
import com.scrumzilla.client.events.AddedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEventHandler;
import com.scrumzilla.client.events.RemovedTaskFromStoryEvent;
import com.scrumzilla.client.events.RemovedTaskFromStoryEventHandler;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.model.Task.TaskState;

public class TasksInStatePanel extends Composite implements EditedTaskEventHandler, AddTaskEventHandler, RemovedTaskFromStoryEventHandler {
	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	private final TaskState fState;
	private final Story fStory;

	
	private FlowPanel fPanel;

	

	public TasksInStatePanel(Story story, TaskState taskState, ScrumzillaController controller, ScrumzillaTaskTypeRegistry taskTypeRegistry) {
		fController = controller;
		fTaskTypeRegistry = taskTypeRegistry;
		fState = taskState;
		fStory = story;
		
		fPanel = new FlowPanel();
		initWidget(fPanel);
		
		
		initUI();
		
		fController.getHandlerManager().addHandler(EditedTaskEvent.TYPE, this);
		fController.getHandlerManager().addHandler(AddedTaskEvent.TYPE, this);
		fController.getHandlerManager().addHandler(RemovedTaskFromStoryEvent.TYPE, this);
	}

	private void initUI() {
		List<Task> tasksForStory = fController.getModel().getTasksForStory(fStory);
		for (Task task : tasksForStory) {
			if(task.getTaskState() == fState){
				fPanel.add(new TaskPanel(fController, task, fTaskTypeRegistry.lookupTaskType(task.getTaskType())));
			}
		}
	}

	public void editedTask(EditedTaskEvent e) {
		if(e.fTask.getStory().equals(fStory)){
			fPanel.clear();
			initUI();
		}
	}

	public void addedTask(AddedTaskEvent addTaskEvent) {
		if(addTaskEvent.fTask.getStory().equals(fStory)){
			fPanel.clear();
			initUI();
		}
	}

	public void removedTaskFromStory(RemovedTaskFromStoryEvent e) {
		if(e.fStoryRemovedFrom.equals(fStory)){
			fPanel.clear();
			initUI();
		}		
	}
	

}
