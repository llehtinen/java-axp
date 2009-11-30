package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface AddTaskEventHandler extends EventHandler {
	void addedTask(AddedTaskEvent addTaskEvent);
}
