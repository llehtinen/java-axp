package com.scrumzilla.client.wave;

import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class WaveEventDispatcher implements ScrumzillaEventDispatcher {

	/*
	 * Easy! We can rely on wave's callback to notify of changes
	 */
	
	public void removedTaskFromStory(Task task, Story originalStory) {
		// TODO Auto-generated method stub

	}

	public void storyAdded(Story s) {
		// TODO Auto-generated method stub

	}

	public void storyRemoved(Story story) {
		// TODO Auto-generated method stub

	}

	public void taskAdded(Task task) {
		// TODO Auto-generated method stub

	}

	public void taskModified(Task task) {
		// TODO Auto-generated method stub

	}

}
