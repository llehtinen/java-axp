package com.scrumzilla.client.taskcontribution;

import com.scrumzilla.client.controller.ScrumzillaController;

public interface ScrumzillaTaskEditingUI {
	public ScrumzillaAddTaskUI getAddTaskUI();
	public ScrumzillaEditTaskUI getEditTaskUI(ScrumzillaController controller);
	public ScrumzillaTaskDisplayUI getTaskDisplayUI();

}
