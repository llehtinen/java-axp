package com.scrumzilla.client.controller;

import java.util.List;
import java.util.Vector;

import com.google.inject.Inject;
import com.scrumzilla.client.controller.AddStoryException.AddStoryErrorType;
import com.scrumzilla.client.model.ScrumzillaModel;
import com.scrumzilla.client.model.Story;

public class ScrumzillaController {
	
	private ScrumzillaModel fModel;
	private List<IScrumzillaChangeListener> fChangeListners = new Vector<IScrumzillaChangeListener>();
	
	@Inject
	public ScrumzillaController(ScrumzillaModel model){
		fModel = model;
	}
	
	public void addChangeListener(IScrumzillaChangeListener l){
		fChangeListners.add(l);
	}
	
	public ScrumzillaModel getModel() {
		return fModel;
	}
	
	public void addStory(Story s) throws AddStoryException{
		if(storyExists(s)){
			throw new AddStoryException(AddStoryErrorType.STORY_EXISTS, s);
		}
		
		if(s.getStoryName() == null || s.getStoryName().trim().length() == 0){
			throw new AddStoryException(AddStoryErrorType.INVALID_STORY_NAME, s);
		}
		
		fModel.getSprintStories().add(s);
		
		fireStoriesChanged();
	}

	private void fireStoriesChanged() {
		for (IScrumzillaChangeListener l : fChangeListners) {
			l.storiesChanged();
		}
	}

	private boolean storyExists(Story s) {
		for (Story existingStory : fModel.getSprintStories()) {
			if(existingStory.equals(s)){
				return true;
			}
		}
		return false;
	}
	
	
	

}
