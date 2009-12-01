package com.scrumzilla.client.wave;


import org.cobogw.gwt.waveapi.gadget.client.WaveGadget;

import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.datalayer.wave.ScrumzillaWaveModel;
import com.scrumzilla.client.taskcontribution.local.ScrumzillaLocalTaskTypeContribution;
import com.scrumzilla.client.ui.ScrumzillaUI;


@Gadget.ModulePrefs(title = "Scrumzilla")
public class ScrumzillaWaveGadget extends WaveGadget<UserPreferences> {

	@Override
	protected void init(UserPreferences preferences) {
		consoleWrite("In init");
		ScrumzillaTaskTypeRegistry registry = new ScrumzillaTaskTypeRegistry();
		registry.registerTaskType(new ScrumzillaLocalTaskTypeContribution());
		HandlerManager scrumzillaHandlerManager = new HandlerManager(this);
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new ScrumzillaWaveModel(), scrumzillaHandlerManager), registry);
		
		getWave().addStateUpdateEventHandler(new ScrumzillaWaveStateUpdateHandler(scrumzillaHandlerManager));
		
		RootPanel.get().add(scrumzillaUI);
		
	}
	
	public static final native void consoleWrite(String s) /*-{ if(console) {console.log(s);}}-*/;

}
