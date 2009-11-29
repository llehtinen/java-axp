package com.scrumzilla.client.controller;

import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public abstract class ScrumzillaControllerErrorHandlerAdapter implements ScrumzillaControllerErrorHandler{

	public void invalidStoryName(String storyName) {
	}

	public void storyDoesNotExist(Story story) {
	}

	public void storyExists(Story s) {
	}

	public void taskDoesNotExist(Task task) {
	}

	public void taskExists(Task t) {
	}

}
