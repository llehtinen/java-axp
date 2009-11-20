package com.scrumzilla.client.model;

import java.util.List;
import java.util.Vector;

public class InMemoryScrumzillaModel implements ScrumzillaModel {

	List<Story> fWaveStories = new Vector<Story>();

	
	public List<Story> getSprintStories() {
		return fWaveStories;
	}
	

}
