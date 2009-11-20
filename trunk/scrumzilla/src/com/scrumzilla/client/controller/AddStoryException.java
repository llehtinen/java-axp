package com.scrumzilla.client.controller;

import com.scrumzilla.client.model.Story;

public class AddStoryException extends Exception {
	public AddStoryErrorType getErrorType() {
		return fErrorType;
	}

	public Story getStory() {
		return fStory;
	}

	public enum AddStoryErrorType {
		STORY_EXISTS, INVALID_STORY_NAME
		

	}

	private AddStoryErrorType fErrorType;
	private Story fStory;

	public AddStoryException(AddStoryErrorType type, Story s) {
		fErrorType = type;
		fStory = s;
	}

}
