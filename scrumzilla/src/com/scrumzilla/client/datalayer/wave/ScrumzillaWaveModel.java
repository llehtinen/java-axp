package com.scrumzilla.client.datalayer.wave;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.scrumzilla.client.datalayer.ScrumzillaModel;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class ScrumzillaWaveModel implements ScrumzillaModel {
	//must be able to generate wave delta
	private static final String STORY_LIST_STATE_KEY = "scrumzilla.state.StoryList";

	public void addStory(Story s, Runnable onSuccessCallback) {
		
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
		State waveState = State.getState();
		String string = waveState.get(STORY_LIST_STATE_KEY);

		List<Story> toReturn = new ArrayList<Story>();
		//represents JSON-encoded array
		if(string == null || string.trim().length() == 0){
		} else {
			JSONValue storyListJSONValue = JSONParser.parse(string);
			if(storyListJSONValue.isArray() != null){
				//should be
				JSONArray array = storyListJSONValue.isArray();
				for(int i = 0; i < array.size(); i++){
					JSONValue jsonValue = array.get(i);
					if(jsonValue.isObject() != null){
						//must be a story
						WaveStory ws = (WaveStory)jsonValue.isObject().getJavaScriptObject();
						toReturn.add(ws.toStory());
					}
				}
			}
		}
		
		return toReturn;
	}
	
	private List<Task> getSprintTasks() {
		// TODO Auto-generated method stub
		return null;
	}

	

	public List<Task> getTasksForStory(Story story) {
		ArrayList<Task> toReturn = new ArrayList<Task>();
		List<Task> allTasks = getSprintTasks();
		for (Task task : allTasks) {
			if(story.equals(task.getStory())){
				toReturn.add(task);
			}
		}
		return toReturn;
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
