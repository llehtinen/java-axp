package com.scrumzilla.client.taskcontribution.local;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.TaskCreationException;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.taskcontribution.ScrumzillaAddTaskUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaEditTaskUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskDisplayUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskEditingUI;

/* package*/ class ScrumzillaLocalTaskEditingUI implements ScrumzillaTaskEditingUI, ScrumzillaAddTaskUI, ScrumzillaEditTaskUI, ScrumzillaTaskDisplayUI {

	
	private VerticalPanel fAddTaskPanel;
	private TextArea fAddTaskDescription;

	public ScrumzillaLocalTaskEditingUI() {
		initUI();
	}
	
	private void initUI() {
		fAddTaskPanel = new VerticalPanel();
		
		
		HorizontalPanel hp = new HorizontalPanel();
		Label l = new Label("Description:");
		hp.add(l);
		
		fAddTaskDescription = new TextArea();
		fAddTaskDescription.setCharacterWidth(30);
		fAddTaskDescription.setHeight("20px");
		
		hp.add(fAddTaskDescription);
		fAddTaskPanel.add(hp);
	}

	public ScrumzillaAddTaskUI getAddTaskUI() {
		return this;
	}

	public ScrumzillaEditTaskUI getEditTaskUI(ScrumzillaController controller) {
		return this;
	}

	public ScrumzillaTaskDisplayUI getTaskDisplayUI() {
		return this;
	}

	public Task createTask() throws TaskCreationException {
		Task t = new Task(ScrumzillaLocalTaskTypeContribution.SCRUMIZILLA_TASK_TYPE_ID, System.currentTimeMillis() + "");
		t.setDescription(fAddTaskDescription.getText().trim());
		return t;
	}

	public Widget getAddTaskWidget() {
		return fAddTaskPanel;
	}

	public void applyChanges()  {
		// TODO Auto-generated method stub
		
	}

	public Widget getEditTaskWidget() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setTaskToEdit(Task task) {
		// TODO Auto-generated method stub
		
	}

	public Widget getDetailedTaskDisplayUI(Task task) {
		// TODO Auto-generated method stub
		return null;
	}

	public Widget getSimpleTaskDisplayUI(Task task) {
		VerticalPanel vp = new VerticalPanel();
		vp.add(new Label("Local Task"));
		vp.add(new Label(task.getDescription()));
		return vp;
	}

}
