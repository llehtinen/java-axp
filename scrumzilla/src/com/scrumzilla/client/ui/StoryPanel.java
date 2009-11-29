package com.scrumzilla.client.ui;

import java.util.List;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.TaskCreationException;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.taskcontribution.ScrumzillaAddTaskUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskDisplayUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class StoryPanel extends Composite {

	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	
	private Story fStory;
	private HorizontalPanel fPanel;
	private Label fStoryLabel;
	private Button fAddTaskButton;
	private VerticalPanel fAddTaskPanel;
	

	public StoryPanel(ScrumzillaController controller, ScrumzillaTaskTypeRegistry taskTypeRegistry, Story story) {
		fController = controller;
		fTaskTypeRegistry = taskTypeRegistry;
		fStory = story;
		
		fPanel = new HorizontalPanel();
		initWidget(fPanel);
		
		initComponent();
	}

	private void initComponent() {

		fStoryLabel = new Label(fStory.getStoryName());
		fPanel.add(fStoryLabel);
		
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
		fPanel.add(removeStory);
		
		
		fAddTaskPanel = new VerticalPanel();
		fAddTaskButton = new Button("Add Task");
		fAddTaskButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				addTaskClicked();
			}
		});
		
		fAddTaskPanel.add(fAddTaskButton);
		fPanel.add(fAddTaskPanel);
		
		//now we can show tasks for this story.
		List<Task> tasksForStory = fController.getModel().getTasksForStory(fStory);
		//show the task UI for each task
		
		for (Task task : tasksForStory) {
			ScrumzillaTaskTypeContribution lookupTaskType = fTaskTypeRegistry.lookupTaskType(task.getTaskType());
			if(lookupTaskType != null){
				ScrumzillaTaskDisplayUI taskDisplayUI = lookupTaskType.getTaskTypeUI().getTaskDisplayUI();
				fPanel.add(getTaskWrapper(taskDisplayUI, task));
			}
		}
	}

	private Widget getTaskWrapper(ScrumzillaTaskDisplayUI taskDisplayUI, final Task task) {
		//TODO: replace with Task D&D wrapper
		VerticalPanel vp = new VerticalPanel();
		vp.add(taskDisplayUI.getSimpleTaskDisplayUI(task));
		HorizontalPanel buttonPanel = new HorizontalPanel();
		Button remove = new Button("X");
		remove.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				fController.removeTaskFromModel(task, new ScrumzillaControllerErrorHandlerAdapter() {
					public void taskDoesNotExist(Task task) {
						Window.alert("Task doesn't exist");
					};
				});
			}
		});
		buttonPanel.add(remove);
		vp.add(buttonPanel);
		return vp;
	}

	protected void addTaskClicked() {
		//if there's more than one task type, allow selection. Otherwise, use the only task type available
		//and create add-task UI
		
		
		String[] taskTypes = fTaskTypeRegistry.getTaskTypes();
		if(taskTypes.length == 1){
			addTask(taskTypes[0]);
		} else {
			final PopupPanel pp = new PopupPanel(true, true);
			MenuBar mb = new MenuBar(true);
			mb.setAutoOpen(true);
			mb.setAnimationEnabled(true);
			
			for (String taskTypeID : taskTypes) {
				final ScrumzillaTaskTypeContribution taskType = fTaskTypeRegistry.lookupTaskType(taskTypeID);
				String taskTypeName = taskType.getDisplayName();
				mb.addItem(new MenuItem(taskTypeName, new Command() {
					public void execute() {
						addTask(taskType.getTaskType());
					}
				}));
			}
			pp.add(mb);
			pp.showRelativeTo(fAddTaskButton);
		}
	}

	private void addTask(String string) {
		//show add task UI, add the resulting task to model
		fAddTaskPanel.clear();
		
		final ScrumzillaAddTaskUI addTaskUI = fTaskTypeRegistry.lookupTaskType(string).getTaskTypeUI().getAddTaskUI();
		
		fAddTaskPanel.add(new Label("Add Task"));
		fAddTaskPanel.add(addTaskUI.getAddTaskWidget());
		
		HorizontalPanel buttonPanel = new HorizontalPanel();
		Button cancelButton = new Button("Cancel");
		cancelButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				resetAddTaskPanel();
			}
		});
		buttonPanel.add(cancelButton);
		
		Button addTaskButton = new Button("Add");
		addTaskButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				try {
					Task t = addTaskUI.createTask();
					fController.addTask(t, new ScrumzillaControllerErrorHandlerAdapter() {
						public void taskExists(Task t) {
							Window.alert("Task already exists!");
						};
					});
					fController.moveTaskToStory(fStory, t);
				} catch (TaskCreationException e) {
					Window.alert(e.getMessage());
				} finally {
					resetAddTaskPanel();
				}
			}
		});
		buttonPanel.add(addTaskButton);
		
		fAddTaskPanel.add(buttonPanel);
	}

	private void resetAddTaskPanel() {
		fAddTaskPanel.clear();
		fAddTaskPanel.add(fAddTaskButton);
	}
	

}
