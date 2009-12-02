package com.scrumzilla.client.wave;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.scrumzilla.client.ScrumzillaModel;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;

public class ScrumzillaWaveModel implements ScrumzillaModel {
	//must be able to generate wave delta
	private static final String STORY_LIST_STATE_KEY = "scrumzilla.state.StoryList";
	public static final String TASK_LIST_STATE_KEY = "scrumzilla.state.TaskList";
	
	private final WaveState fWaveState;
	
	public ScrumzillaWaveModel(WaveState waveState) {
		fWaveState = waveState;
	}

	public void addStory(Story s) {
		WaveStory waveStory = (WaveStory)WaveStory.newWaveStory();
		waveStory.fromStory(s);
		
		List<WaveStory> waveStories = getWaveList(STORY_LIST_STATE_KEY);
		waveStories.add(waveStory);
		storeWaveList(STORY_LIST_STATE_KEY, waveStories);
	}



	public void addTask(Task t) {
		WaveTask waveTask = (WaveTask)WaveTask.createObject();
		waveTask.fromTask(t);
		
		List<WaveTask> tasks = getWaveList(TASK_LIST_STATE_KEY);
		tasks.add(waveTask);
		storeWaveList(TASK_LIST_STATE_KEY, tasks);
	}

	public void taskModified(Task task) {
		List<WaveTask> waveTasks = getWaveList(TASK_LIST_STATE_KEY);
		WaveTask newTask = (WaveTask)WaveTask.createObject();
		newTask.fromTask(task);
		for(int i = 0; i < waveTasks.size(); i++){
			if(waveTasks.get(i).getUniqueID().equals(task.getUniqueID())){
				waveTasks.set(i, newTask);
				break;
			}
		}
		storeWaveList(TASK_LIST_STATE_KEY, waveTasks);
	}

	


	public void removeStory(Story story) {
		List<WaveStory> waveStories = getWaveList(STORY_LIST_STATE_KEY);
		
		for(int i = 0; i < waveStories.size(); i++){
			WaveStory ws = waveStories.get(i);
			if(ws.toStory().equals(story)){
				waveStories.remove(i);
				break;
			}
		}
		
		storeWaveList(STORY_LIST_STATE_KEY, waveStories);		
	}

	public void removeTask(Task task) {
		List<WaveTask> waveTasks = getWaveList(TASK_LIST_STATE_KEY);
		
		for(int i = 0; i < waveTasks.size(); i++){
			WaveTask wt = waveTasks.get(i);
			if(wt.toTask().equals(task)){
				waveTasks.remove(i);
				break;
			}
		}
		
		storeWaveList(TASK_LIST_STATE_KEY, waveTasks);			
	}


	public void doesTaskExist(Task t, AsynchResult<Boolean> asynchResult) {
		List<WaveTask> waveList = getWaveList(TASK_LIST_STATE_KEY);
		for (WaveTask waveTask : waveList) {
			if(waveTask.toTask().equals(t)){
				asynchResult.result(true);
				return;
			}
		}
		
		asynchResult.result(false);
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


	public List<Story> getSprintStories() {
		List<Story> toReturn = new ArrayList<Story>();

		List<WaveStory> waveStories = getWaveList(STORY_LIST_STATE_KEY);
		for (WaveStory ws : waveStories) {
			toReturn.add(ws.toStory());

		}
		return toReturn;
	}
	
	private List<Task> getSprintTasks() {
		List<Task> toReturn = new ArrayList<Task>();

		List<WaveTask> waveTasks = getWaveList(TASK_LIST_STATE_KEY);
		for (WaveTask wt : waveTasks) {
			toReturn.add(wt.toTask());

		}
		return toReturn;
	}

	@SuppressWarnings("unchecked")
	private <T extends JavaScriptObject> List<T> getWaveList(String key) {
		List<T> waveTasks = new ArrayList<T>();
		String string = fWaveState.get(key);

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
					T wt = (T)jsonValue.isObject().getJavaScriptObject();
					waveTasks.add(wt);
				}
			}
		}
		return waveTasks;
	}

	private void storeWaveList(String key, List<? extends JavaScriptObject> waveTasks) {
		JavaScriptObject outputArray = JavaScriptObject.createArray();
		JSONArray array = new JSONArray(outputArray);

		for(int i = 0; i < waveTasks.size(); i++){
			array.set(i, new JSONObject(waveTasks.get(i)));
		}
		
		
		//now... serialize the array, and publish as updated state for the StoryList
		HashMap<String, String> delta = new HashMap<String, String>();
		String outputJSON = array.toString();
		delta.put(key, outputJSON);
		fWaveState.submitDelta(delta);
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
