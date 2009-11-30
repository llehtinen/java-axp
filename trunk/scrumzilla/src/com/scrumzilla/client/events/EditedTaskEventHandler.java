package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface EditedTaskEventHandler extends EventHandler {
	public void editedTask(EditedTaskEvent e);
}
