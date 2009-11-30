package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface RemovedStoryEventHandler extends EventHandler {
	public void storyRemoved(RemovedStoryEvent e);

}
