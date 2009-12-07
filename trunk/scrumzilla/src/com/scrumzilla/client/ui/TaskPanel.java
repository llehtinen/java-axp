package com.scrumzilla.client.ui;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.events.EditedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEventHandler;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskDisplayUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class TaskPanel extends Composite implements EditedTaskEventHandler{

	private Task fTask;
	private final ScrumzillaController fController;

	private VerticalPanel fMainPanel;
	private final ScrumzillaTaskTypeContribution fTaskTypeContribution;
	private ListBox fTaskStateSelector;
	private Label fDragHandle;

	
	public TaskPanel(ScrumzillaController controller, Task task, ScrumzillaTaskTypeContribution taskTypeContribution) {
		fTask = task;
		fTaskTypeContribution = taskTypeContribution;
		fController = controller;
		fMainPanel = new VerticalPanel();
		initWidget(fMainPanel);
		initUI();
		
		fController.getHandlerManager().addHandler(EditedTaskEvent.TYPE, this);
	
		setStyleName("scrumzilla-taskUI-taskPanel");
	}

	private void initUI() {
		fDragHandle = new Label("Drag Label");
		fDragHandle.setStyleName("scrumzilla-taskUI-dragLabel");
		
		fMainPanel.add(fDragHandle);
		
		ScrumzillaTaskDisplayUI taskDisplayUI = fTaskTypeContribution.getTaskTypeUI().getTaskDisplayUI();
		fMainPanel.add(taskDisplayUI.getSimpleTaskDisplayUI(fTask));
		HorizontalPanel buttonPanel = new HorizontalPanel();
		Button remove = new Button("X");
		remove.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				removeTaskClicked(fTask);
			}
		});
		buttonPanel.add(remove);
		fMainPanel.add(buttonPanel);
	}
	
	private void removeTaskClicked(Task task) {
		fController.removeTaskFromModel(task, new ScrumzillaControllerErrorHandlerAdapter() {
			public void taskDoesNotExist(Task task) {
				Window.alert("Task doesn't exist");
			};
		});
	}

	public Task getTask() {
		return fTask;
	}

	public void setTask(Task task) {
		fTask = task;
	}

	public void editedTask(EditedTaskEvent e) {
		if(e.fTask.equals(fTask)){
			setTask(e.fTask);
			fMainPanel.clear();
			initUI();
		}
	}
	
	public Widget getDragHandle() {
		return fDragHandle;
	}
	
	@Override
	protected void onDetach() {
		fController.getHandlerManager().removeHandler(EditedTaskEvent.TYPE, this);
		super.onDetach();
	}
}
