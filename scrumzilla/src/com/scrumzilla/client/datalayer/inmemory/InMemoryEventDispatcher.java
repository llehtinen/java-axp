package com.scrumzilla.client.datalayer.inmemory;

import com.google.gwt.event.shared.HandlerManager;
import com.scrumzilla.client.events.AddedStoryEvent;
import com.scrumzilla.client.events.AddedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEvent;
import com.scrumzilla.client.events.RemovedStoryEvent;
import com.scrumzilla.client.events.RemovedTaskFromStoryEvent;
import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class InMemoryEventDispatcher implements ScrumzillaEventDispatcher {

	private HandlerManager fHandlerManager;

	public InMemoryEventDispatcher(HandlerManager scrumzillaHandlerManager) {
		fHandlerManager = scrumzillaHandlerManager;
	}

	public void storyAdded(Story s) {
		fHandlerManager.fireEvent(new AddedStoryEvent(s));
	}

	public void storyRemoved(Story story) {
		fHandlerManager.fireEvent(new RemovedStoryEvent(story));
	}

	public void removedTaskFromStory(Task task, Story originalStory) {
		fHandlerManager.fireEvent(new RemovedTaskFromStoryEvent(task, originalStory));
	}

	public void taskAdded(Task task) {
		fHandlerManager.fireEvent(new AddedTaskEvent(task));
	}

	public void taskModified(Task task) {
		fHandlerManager.fireEvent(new EditedTaskEvent(task));		
	}
	


}
