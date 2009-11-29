package com.scrumzilla.client.taskcontribution.local;

import com.scrumzilla.client.taskcontribution.ScrumzillaTaskEditingUI;
import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class ScrumzillaLocalTaskTypeContribution implements ScrumzillaTaskTypeContribution {

	public static final String SCRUMIZILLA_TASK_TYPE_ID = "scrumzilla.local";
	
	public String getTaskType() {
		return SCRUMIZILLA_TASK_TYPE_ID;
	}

	public ScrumzillaTaskEditingUI getTaskTypeUI() {
		return new ScrumzillaLocalTaskEditingUI();
	}

	public String getDisplayName() {
		return "Simple Task";
	}

}
