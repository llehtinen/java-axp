package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.scrumzilla.client.model.Story;

public class RemovedStoryEvent extends GwtEvent<RemovedStoryEventHandler> {

	public static final Type<RemovedStoryEventHandler> TYPE = new GwtEvent.Type<RemovedStoryEventHandler>();
	public final Story fStory;

	public RemovedStoryEvent(Story s){
		fStory = s;
	}
	
	@Override
	protected void dispatch(RemovedStoryEventHandler handler) {
		handler.storyRemoved(this);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<RemovedStoryEventHandler> getAssociatedType() {
		// TODO Auto-generated method stub
		return TYPE;
	}

}
