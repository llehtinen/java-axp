package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class RemovedTaskFromStoryEvent extends GwtEvent<RemovedTaskFromStoryEventHandler> {

	public static final Type<RemovedTaskFromStoryEventHandler> TYPE = new GwtEvent.Type<RemovedTaskFromStoryEventHandler>();
	
	public final Task fTask;
	public final Story fStoryRemovedFrom;

	public RemovedTaskFromStoryEvent(Task t, Story removedFrom){
		fTask = t;
		fStoryRemovedFrom = removedFrom;
	}
	
	@Override
	protected void dispatch(RemovedTaskFromStoryEventHandler handler) {
		handler.removedTaskFromStory(this);
		
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<RemovedTaskFromStoryEventHandler> getAssociatedType() {
		return TYPE;
	}

}
