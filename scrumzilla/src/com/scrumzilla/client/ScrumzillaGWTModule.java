package com.scrumzilla.client;

import java.util.HashMap;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.user.client.ui.RootPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.events.ScrumzillaEventDispatcher;
import com.scrumzilla.client.taskcontribution.local.ScrumzillaLocalTaskTypeContribution;
import com.scrumzilla.client.ui.ScrumzillaUI;
import com.scrumzilla.client.wave.MockWaveState;
import com.scrumzilla.client.wave.ScrumzillaWaveModel;
import com.scrumzilla.client.wave.WaveEventDispatcher;

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
		HashMap<String, String> initialState = new HashMap<String, String>();
		initialState.put(ScrumzillaWaveModel.TASK_LIST_STATE_KEY, "[{\"TaskDescription\":\"Implement SWT Renderer and Viewer Application\",\"UniqueID\":\"5\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"Support for all Gradient Brush types\",\"UniqueID\":\"6\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"Update model to support XPS Version 1.0\",\"UniqueID\":\"7\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"XPS to PDF conversion\",\"UniqueID\":\"12\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"Create a version deployable on Java 1.5 for OS X\",\"UniqueID\":\"14\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"Swingviewer should use platform look and feel\",\"UniqueID\":\"15\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"},{\"TaskDescription\":\"Unobfuscated font files can't be opened\",\"UniqueID\":\"16\",\"TaskStory\":{\"StoryName\":\"Unassigned\"},\"TaskState\":\"TODO\",\"TaskType\":\"scrumzilla.googlecode\"}]");
		ScrumzillaEventDispatcher ed = new WaveEventDispatcher();
		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new ScrumzillaWaveModel(new MockWaveState(scrumzillaHandlerManager, initialState)), scrumzillaHandlerManager, ed), registry);		
		
		//In memory GWT config
//		ScrumzillaEventDispatcher ed = new InMemoryEventDispatcher(scrumzillaHandlerManager);
//		ScrumzillaUI scrumzillaUI = new ScrumzillaUI(new ScrumzillaController(new InMemoryScrumzillaModel(), scrumzillaHandlerManager, ed), registry);
		RootPanel.get().add(scrumzillaUI);
	}
}
