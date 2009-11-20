package com.scrumzilla.client;

import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.scrumzilla.client.ui.ScrumzillaUI;

@GinModules(ScrumzillaUIModule.class)
public interface ScrumzillaInjector extends Ginjector{
	ScrumzillaUI getScrumzillaUI();
}
