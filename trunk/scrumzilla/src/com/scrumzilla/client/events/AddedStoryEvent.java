package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.scrumzilla.client.model.Story;

public class AddedStoryEvent extends GwtEvent<AddedStoryEventHandler> {

	public static final Type<AddedStoryEventHandler> TYPE = new GwtEvent.Type<AddedStoryEventHandler>();
	
	public final Story fStory;

	public AddedStoryEvent(Story s) {
		fStory = s;
	}

	@Override
	protected void dispatch(AddedStoryEventHandler handler) {
		handler.addedStory(this);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<AddedStoryEventHandler> getAssociatedType() {
		return TYPE;
	}
}
