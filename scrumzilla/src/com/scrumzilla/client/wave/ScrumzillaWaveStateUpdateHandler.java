package com.scrumzilla.client.wave;

import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEvent;
import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEventHandler;

import com.google.gwt.event.shared.HandlerManager;
import com.scrumzilla.client.events.ModelChangedEvent;

//forward wave change events to the standard event handling logic
public class ScrumzillaWaveStateUpdateHandler implements StateUpdateEventHandler {

	private HandlerManager fApplicationHandlerManager;

	public ScrumzillaWaveStateUpdateHandler(HandlerManager scrumzillaHandlerManager) {
		fApplicationHandlerManager = scrumzillaHandlerManager;
	}

	public void onUpdate(StateUpdateEvent event) {
		fApplicationHandlerManager.fireEvent(new ModelChangedEvent());
	}

}
