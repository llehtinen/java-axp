package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface RemovedTaskFromStoryEventHandler extends EventHandler {
	public void removedTaskFromStory(RemovedTaskFromStoryEvent e);

}
