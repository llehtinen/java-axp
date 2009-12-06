package com.scrumzilla.client.ui;

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
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.TaskCreationException;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.taskcontribution.ScrumzillaAddTaskUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class AddTaskToStoryPanel extends Composite {

	private VerticalPanel fAddTaskPanel;
	private Button fAddTaskButton;
	private final Story fStory;
	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;

	public AddTaskToStoryPanel(Story story, ScrumzillaController controller, ScrumzillaTaskTypeRegistry taskTypeRegistry) {
		fStory = story;
		fController = controller;
		fTaskTypeRegistry = taskTypeRegistry;
		
		fAddTaskPanel = new VerticalPanel();
		fAddTaskPanel.setStyleName("scrumzilla-taskUI-addTaskPanel");
		
		initWidget(fAddTaskPanel);
		
		initUI();
	}

	private void initUI() {
		fAddTaskButton = new Button("Add Task");
		fAddTaskButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				addTaskClicked();
			}
		});
		fAddTaskButton.setStyleName("scrumzilla-taskUI-addTaskButton");
		
		
		fAddTaskPanel.add(fAddTaskButton);

		
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
		
		Label addTaskLabel = new Label("Add Task");
		addTaskLabel.setStyleName("scrumzilla-taskUI-addTaskLabel");
		fAddTaskPanel.add(addTaskLabel);
		
		fAddTaskPanel.add(addTaskUI.getAddTaskWidget());
		
		HorizontalPanel buttonPanel = new HorizontalPanel();
		Button cancelButton = new Button("Cancel");
		cancelButton.setStyleName("scrumzilla-taskUI-addTaskCancelButton");
		cancelButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				resetAddTaskPanel();
			}
		});
		buttonPanel.add(cancelButton);
		
		Button addTaskButton = new Button("Add");
		addTaskButton.setStyleName("scrumzilla-taskUI-addTaskConfirmButton");
		addTaskButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				try {
					Task t = addTaskUI.createTask();
					t.setStory(fStory);
					fController.addTask(t, new ScrumzillaControllerErrorHandlerAdapter() {
						public void taskExists(Task t) {
							Window.alert("Task already exists!");
						};
					});
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
