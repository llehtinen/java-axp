package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.scrumzilla.client.model.Task;

public class AddedTaskEvent extends GwtEvent<AddTaskEventHandler> {

    public static final GwtEvent.Type<AddTaskEventHandler> TYPE = new GwtEvent.Type<AddTaskEventHandler>();
	public final Task fTask;
	
	public AddedTaskEvent(Task t){
		fTask = t;
	}
	
	@Override
	protected void dispatch(AddTaskEventHandler handler) {
		handler.addedTask(this);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<AddTaskEventHandler> getAssociatedType() {
		return TYPE;
	}


}
