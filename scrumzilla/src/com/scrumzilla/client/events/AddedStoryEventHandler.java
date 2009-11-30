package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface AddedStoryEventHandler extends EventHandler {
	public void addedStory(AddedStoryEvent e);
}
