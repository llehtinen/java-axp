package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.scrumzilla.client.model.Task;

public class EditedTaskEvent extends GwtEvent<EditedTaskEventHandler> {

	public static final Type<EditedTaskEventHandler> TYPE = new GwtEvent.Type<EditedTaskEventHandler>();
	public final Task fTask;

	public EditedTaskEvent(Task t){
		fTask = t;
	}
	
	@Override
	protected void dispatch(EditedTaskEventHandler handler) {
		handler.editedTask(this);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<EditedTaskEventHandler> getAssociatedType() {
		return TYPE;
	}

}
