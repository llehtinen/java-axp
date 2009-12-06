package com.scrumzilla.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.datalayer.inmemory.InMemoryEventDispatcher;
import com.scrumzilla.client.datalayer.inmemory.InMemoryScrumzillaModel;
import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.taskcontribution.local.ScrumzillaLocalTaskTypeContribution;
import com.scrumzilla.client.ui.ScrumzillaUI;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class ScrumzillaGWTModule implements EntryPoint {
	
//	private final ScrumzillaInjector injector = GWT.create(ScrumzillaInjector.class);

	
	public void onModuleLoad() {
//		ScrumzillaUI scrumzillaUI = injector.getScrumzillaUI();
		ScrumzillaTaskTypeRegistry registry = new ScrumzillaTaskTypeRegistry();
		registry.registerTaskType(new ScrumzillaLocalTaskTypeContribution());
		
		HandlerManager scrumzillaHandlerManager = new HandlerManager(this);
		
//		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new InMemoryScrumzillaModel(), scrumzillaHandlerManager), registry);

		
		//Local wave config
//		ScrumzillaEventDispatcher ed = new WaveEventDispatcher();
//		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new ScrumzillaWaveModel(new MockWaveState(scrumzillaHandlerManager)), scrumzillaHandlerManager, ed), registry);		
		
		//In memory GWT config
		ScrumzillaEventDispatcher ed = new InMemoryEventDispatcher(scrumzillaHandlerManager);
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new InMemoryScrumzillaModel(), scrumzillaHandlerManager, ed), registry);
		RootPanel.get().add(scrumzillaUI);
	}
}
