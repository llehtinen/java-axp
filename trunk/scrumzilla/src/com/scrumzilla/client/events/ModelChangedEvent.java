package com.scrumzilla.client.events;

import com.google.gwt.event.shared.GwtEvent;

public class ModelChangedEvent extends GwtEvent<ModelChangedEventHandler> {

	public static final Type<ModelChangedEventHandler> TYPE = new GwtEvent.Type<ModelChangedEventHandler>();

	@Override
	protected void dispatch(ModelChangedEventHandler handler) {
		handler.modelChanged(this);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ModelChangedEventHandler> getAssociatedType() {
		// TODO Auto-generated method stub
		return TYPE;
	}

}
