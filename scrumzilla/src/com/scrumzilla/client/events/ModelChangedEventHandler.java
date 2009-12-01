package com.scrumzilla.client.events;

import com.google.gwt.event.shared.EventHandler;

public interface ModelChangedEventHandler extends EventHandler {
	void modelChanged(ModelChangedEvent modelChangedEvent);
}
