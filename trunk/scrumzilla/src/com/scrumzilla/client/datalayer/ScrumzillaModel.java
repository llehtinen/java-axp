package com.scrumzilla.client.datalayer;

import java.util.List;

import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaModel {
	
	public interface AsynchResult<T> {
		public void result(T t);
	}
	
	
	public List<Story> getSprintStories();
	public List<Task> getTasksForStory(Story story);
	public void addTask(Task t, Runnable onSuccessCallback);
	public void addStory(Story s, Runnable onSuccessCallback);

	public void taskModified(Task task, Runnable runnable);

	
	public void removeTask(Task task, Runnable onSuccessCallback);
	public void removeStory(Story story, Runnable onSuccessCallback);

	
	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult);
	public void doesStoryExist(Story s, AsynchResult<Boolean> asynchResult);
	

}
