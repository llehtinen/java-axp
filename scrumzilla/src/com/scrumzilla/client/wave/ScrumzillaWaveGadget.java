package com.scrumzilla.client.wave;


import org.cobogw.gwt.waveapi.gadget.client.WaveGadget;

import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.NeedsDynamicHeight;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.events.ModelChangedEvent;
import com.scrumzilla.client.events.ModelChangedEventHandler;
import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.taskcontribution.local.ScrumzillaLocalTaskTypeContribution;
import com.scrumzilla.client.ui.ScrumzillaUI;


@Gadget.ModulePrefs(title = "Scrumzilla", scrolling = true  )

public class ScrumzillaWaveGadget extends WaveGadget<UserPreferences> implements NeedsDynamicHeight {
	private DynamicHeightFeature fDynamicHeightFeature;

	@Override
	protected void init(UserPreferences preferences) {
		ScrumzillaTaskTypeRegistry registry = new ScrumzillaTaskTypeRegistry();
		registry.registerTaskType(new ScrumzillaLocalTaskTypeContribution());
		HandlerManager scrumzillaHandlerManager = new HandlerManager(this);
		
		ScrumzillaEventDispatcher ed = new WaveEventDispatcher();
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new ScrumzillaWaveModel(new WaveStateWrapper()), scrumzillaHandlerManager, ed), registry);
		
		getWave().addStateUpdateEventHandler(new ScrumzillaWaveStateUpdateHandler(scrumzillaHandlerManager));
		
		RootPanel.get().add(scrumzillaUI);
		
		if(fDynamicHeightFeature != null){
			fDynamicHeightFeature.adjustHeight();
		}
		
		scrumzillaHandlerManager.addHandler(ModelChangedEvent.TYPE, new ModelChangedEventHandler() {
			public void modelChanged(ModelChangedEvent modelChangedEvent) {
				if(fDynamicHeightFeature != null){
					fDynamicHeightFeature.adjustHeight();
				}
			}
		});
		
	}

	public void initializeFeature(DynamicHeightFeature feature) {
		fDynamicHeightFeature = feature;
	}
	
	public static final native void consoleWrite(String s) /*-{ if(console) {console.log(s);}}-*/;



}
