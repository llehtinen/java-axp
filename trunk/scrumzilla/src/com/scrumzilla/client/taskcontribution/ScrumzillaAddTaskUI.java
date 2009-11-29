package com.scrumzilla.client.taskcontribution;

import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.TaskCreationException;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaAddTaskUI {
	public Widget getAddTaskWidget();
	public Task createTask() throws TaskCreationException;

}
