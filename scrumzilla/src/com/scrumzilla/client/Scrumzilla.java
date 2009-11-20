package com.scrumzilla.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.model.InMemoryScrumzillaModel;
import com.scrumzilla.client.ui.ScrumzillaUI;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Scrumzilla implements EntryPoint {
	
//	private final ScrumzillaInjector injector = GWT.create(ScrumzillaInjector.class);

	
	public void onModuleLoad() {
//		ScrumzillaUI scrumzillaUI = injector.getScrumzillaUI();
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new InMemoryScrumzillaModel()));
		RootPanel.get().add(scrumzillaUI);
	}
}
