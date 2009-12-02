package com.scrumzilla.client.events;

import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public interface ScrumzillaEventDispatcher {

	void storyAdded(Story s);

	void storyRemoved(Story story);

	void removedTaskFromStory(Task task, Story originalStory);

	void taskAdded(Task task);

	void taskModified(Task task);

}
