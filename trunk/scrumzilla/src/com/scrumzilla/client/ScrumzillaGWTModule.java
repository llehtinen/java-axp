package com.scrumzilla.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.datalayer.inmemory.InMemoryScrumzillaModel;
import com.scrumzilla.client.datalayer.wave.ScrumzillaWaveModel;
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
		
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new InMemoryScrumzillaModel(), scrumzillaHandlerManager), registry);
//		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new ScrumzillaWaveModel(), scrumzillaHandlerManager), registry);
		RootPanel.get().add(scrumzillaUI);
	}
}
