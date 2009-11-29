package com.scrumzilla.client.controller;

import java.util.List;
import java.util.Vector;

import com.google.inject.Inject;
import com.scrumzilla.client.model.ScrumzillaModel;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.model.ScrumzillaModel.AsynchResult;

/*
 * - Expose operations to UI
 * 		- Possible to make setters in model classes inaccessible outside controller?
 * - Keep model consistent when changes are made
 * - Notify Event Bus of changes
 */

public class ScrumzillaController {
	
	
	
	private ScrumzillaModel fModel;
	private List<IScrumzillaChangeListener> fChangeListeners = new Vector<IScrumzillaChangeListener>();
	
	@Inject
	public ScrumzillaController(ScrumzillaModel model){
		fModel = model;
	}
	
	public void addChangeListener(IScrumzillaChangeListener l){
		fChangeListeners.add(l);
	}
	
	public ScrumzillaModel getModel() {
		return fModel;
	}
	
	
	public void addTask(final Task t, final ScrumzillaControllerErrorHandler errorHandler) {
		fModel.doesTaskExist(t, new AsynchResult<Boolean>() {
			public void result(Boolean taskExists) {
				if(taskExists){
					errorHandler.taskExists(t);
				} else {
					fModel.addTask(t, new Runnable() {
						public void run() {
							fireModelChanged();		
						}
					});
				}
			}
		});
	}
	

	public void addStory(final Story s, final ScrumzillaControllerErrorHandler handler) {

		if(s.getStoryName() == null || s.getStoryName().trim().length() == 0){
			handler.invalidStoryName(s.getStoryName());
		} else {
			fModel.doesStoryExist(s, new AsynchResult<Boolean>() {
				public void result(Boolean storyExists) {
					if(storyExists){
						handler.storyExists(s);
					} else {
						fModel.addStory(s, new Runnable() {
							public void run() {
								fireModelChanged();
							}
						});
					}
				}
			});
		}
	}
	
	public void removeStory(final Story story, final ScrumzillaControllerErrorHandler handler)  {
		fModel.doesStoryExist(story, new AsynchResult<Boolean>() {
			public void result(Boolean storyExists) {
				if(!storyExists){
					handler.storyDoesNotExist(story);
				} else {
					fModel.removeStory(story, new Runnable() {
						public void run() {
							fireModelChanged();
						}
					});
				}
			}
		});
	}
	

	public void moveTaskToStory(Story story, Task task){
		if(task == null){
			throw new IllegalArgumentException("Need non-null task");
		}
		task.setStory(story);
		
		fModel.taskModified(task, new Runnable() {
			public void run() {
				fireModelChanged();
			}
		});
	}
	
	
	public void changeTaskDescription(Task task, String newDescription) {
		task.setDescription(newDescription);
		fModel.taskModified(task, new Runnable() {
			public void run() {
				fireModelChanged();
			}
		});
		
		
	}
	
	public void removeTaskFromModel(final Task task, final ScrumzillaControllerErrorHandler handler) {
		fModel.doesTaskExist(task, new AsynchResult<Boolean>() {
			public void result(Boolean taskExists) {
				if(!taskExists){
					handler.taskDoesNotExist(task);
				} else {
					fModel.removeTask(task, new Runnable() {
						public void run() {
							fireModelChanged();				
						}
					});
				}
			}
		});
	}
	
	
	private void fireModelChanged() {
		for (IScrumzillaChangeListener l : fChangeListeners) {
			l.modelChanged();
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
