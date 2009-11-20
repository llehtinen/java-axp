package com.scrumzilla.client;

import com.google.gwt.inject.client.AbstractGinModule;
import com.scrumzilla.client.model.InMemoryScrumzillaModel;
import com.scrumzilla.client.model.ScrumzillaModel;

public class ScrumzillaUIModule extends AbstractGinModule {

	@Override
	protected void configure() {
		bind(ScrumzillaModel.class).to(InMemoryScrumzillaModel.class);
	}

}
