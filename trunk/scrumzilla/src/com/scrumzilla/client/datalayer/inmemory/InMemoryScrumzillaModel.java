package com.scrumzilla.client.datalayer.inmemory;

import java.util.List;
import java.util.Vector;

import com.scrumzilla.client.ScrumzillaModel;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class InMemoryScrumzillaModel implements ScrumzillaModel {

	List<Story> fWaveStories = new Vector<Story>();
	List<Task> fWaveTasks = new Vector<Task>();


	
	public List<Story> getSprintStories() {
		return fWaveStories;
	}


	public List<Task> getTasksForStory(Story story) {
		Vector<Task> toReturn = new Vector<Task>();
		for (Task task : fWaveTasks) {
			if(story == null){
				if(task.getStory() == null){
					toReturn.add(task);
				}
			} else {
				if(story.equals(task.getStory())){	
					toReturn.add(task);
				}
			}
		}
		
		return toReturn;
	}


	public void addTask(Task t) {
		fWaveTasks.add(t);
	}
	
	public void addStory(Story s) {
		fWaveStories.add(s);
	}



	public void removeTask(Task task) {
		fWaveTasks.remove(task);
	}


	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult) {
		for (Task take : fWaveTasks) {
			if(take.equals(t)){
				asynchResult.result(true);
				return;
			}
		} 
		asynchResult.result(false);
	}

	
	public void doesStoryExist(Story s, AsynchResult<Boolean> asynchResult) {
		for (Story story : fWaveStories) {
			if(story.equals(s)){
				asynchResult.result(true);
				return;
			}
		}
		
		asynchResult.result(false);
	}


	public void removeStory(Story story) {
		fWaveStories.remove(story);
	}


	public void taskModified(Task task) {
		//nothing to do
	}
	

}
