package com.scrumzilla.client.taskcontribution;

import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaTaskDisplayUI {
	public Widget getSimpleTaskDisplayUI(Task task);
	public Widget getDetailedTaskDisplayUI(Task task);

}
