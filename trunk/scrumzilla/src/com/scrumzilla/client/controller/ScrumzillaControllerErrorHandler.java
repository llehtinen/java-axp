/**
 * 
 */
package com.scrumzilla.client.controller;

import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaControllerErrorHandler {
	public void taskExists(Task t);
	public void storyExists(Story s);
	public void invalidStoryName(String storyName);
	public void storyDoesNotExist(Story story);
	public void taskDoesNotExist(Task task);
}