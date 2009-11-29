package com.scrumzilla.client.taskcontribution;

import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaEditTaskUI {
	public Widget getEditTaskWidget();
	public void setTaskToEdit(Task task);
	public void applyChanges();
}
