package com.scrumzilla.client.model;

import java.util.List;

public class ScrumzillaWaveModel implements ScrumzillaModel {

	public void addStory(Story s, Runnable onSuccessCallback) {
		// TODO Auto-generated method stub
		
	}

	public void addTask(Task t, Runnable onSuccessCallback) {
		// TODO Auto-generated method stub
		
	}

	public void doesStoryExist(Story s, AsynchResult<Boolean> asynchResult) {
		// TODO Auto-generated method stub
		
	}

	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult) {
		// TODO Auto-generated method stub
		
	}

	public List<Story> getSprintStories() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Task> getTasksForStory(Story story) {
		// TODO Auto-generated method stub
		return null;
	}

	public void removeStory(Story story, Runnable onSuccessCallback) {
		// TODO Auto-generated method stub
		
	}

	public void removeTask(Task task, Runnable onSuccessCallback) {
		// TODO Auto-generated method stub
		
	}

	public void taskModified(Task task, Runnable runnable) {
		// TODO Auto-generated method stub
		
	}

}
