package com.scrumzilla.client.datalayer.wave;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.scrumzilla.client.datalayer.ScrumzillaModel;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class ScrumzillaWaveModel implements ScrumzillaModel {
	//must be able to generate wave delta
	private static final String STORY_LIST_STATE_KEY = "scrumzilla.state.StoryList";
	public static final String TASK_LIST_STATE_KEY = "scrumzilla.state.TaskList";

	public void addStory(Story s, Runnable onSuccessCallback) {
		//generate wave delta for story addition
		//ie. get list of stories, add to it, propgate new value of story list property

		State waveState = State.getState();
		String string = waveState.get(STORY_LIST_STATE_KEY);

		//represents JSON-encoded array
		if(string == null || string.trim().length() == 0){
			string = "[]"; //empty array
		}
		
		
		JSONValue storyListJSONValue = JSONParser.parse(string);
		if(storyListJSONValue.isArray() != null){
			//should be
			JSONArray array = storyListJSONValue.isArray();
			int size = array.size();
			
//			ScrumzillaWaveGadget.consoleWrite("num stories: " + size);
			
			//get and populate the wave that will be added to the list
			WaveStory waveStory = (WaveStory)WaveStory.createWaveStory();
			waveStory.fromStory(s);
			array.set(size, new JSONObject(waveStory));
			
			//now... serialize the array, and publish as updated state for the StoryList
			
			HashMap<String, String> delta = new HashMap<String, String>();
			String storyListJSON = array.toString();
			delta.put(STORY_LIST_STATE_KEY, storyListJSON);
			waveState.submitDelta(delta);
		}
		
//		onSuccessCallback.run();
	}

	public void addTask(Task t, Runnable onSuccessCallback) {
		// TODO Auto-generated method stub
		
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
	
	public void doesStoryExist(Story s, AsynchResult<Boolean> asynchResult) {
		List<Story> sprintStories = getSprintStories();
		for (Story story : sprintStories) {
			if(story.equals(s)){
				asynchResult.result(true);
				return;
			}
		}
		
		asynchResult.result(false);
		
	}

	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult) {
		// TODO Auto-generated method stub
	}



	public List<Story> getSprintStories() {
		List<Story> toReturn = new ArrayList<Story>();

		State waveState = State.getState();
		
		if(waveState == null){
			return toReturn;
		}
		
		String string = waveState.get(STORY_LIST_STATE_KEY);
		
		
		//represents JSON-encoded array
		if(string == null || string.trim().length() == 0){
			string = "[]"; //empty array
		}
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
		return toReturn;
	}
	
	private List<Task> getSprintTasks() {
		List<Task> toReturn = new ArrayList<Task>();

		//to build tasks, the stories must be available
		List<Story> stories = getSprintStories();

		State waveState = State.getState();
		if(waveState == null){
			return toReturn;
		}
		
		String string = waveState.get(TASK_LIST_STATE_KEY);

		//represents JSON-encoded array
		if(string == null || string.trim().length() == 0){
			string = "[]"; //empty array
		}
		JSONValue storyListJSONValue = JSONParser.parse(string);
		if(storyListJSONValue.isArray() != null){
			//should be
			JSONArray array = storyListJSONValue.isArray();
			for(int i = 0; i < array.size(); i++){
				JSONValue jsonValue = array.get(i);
				if(jsonValue.isObject() != null){
					//must be a story
					WaveTask wt = (WaveTask)jsonValue.isObject().getJavaScriptObject();
					toReturn.add(wt.toTask(stories));
				}
			}
		}
		return toReturn;
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
}
