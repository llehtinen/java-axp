package com.scrumzilla.client.datalayer.wave;

import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.model.Task.TaskState;

public class WaveTask extends JavaScriptObject {
	
	
	
	
	protected WaveTask() {
	}
	
	
	public final native String getTaskType() /*-{ return this.TaskType }-*/;
	public final native void setTaskType(String type) /*-{ this.TaskType = type; }-*/;
	

	public final native String getUniqueID() /*-{ return this.UniqueID }-*/;
	public final native void setUniqueID(String id) /*-{ this.UniqueID = id; }-*/;

	public final native String getTaskDescription() /*-{ return this.TaskDescription }-*/;
	public final native void setTaskDescription(String description) /*-{ this.TaskDescription = description; }-*/;

	public final native String getTaskState() /*-{ return this.TaskState }-*/;
	public final native void setTaskState(String state) /*-{ this.TaskState = state; }-*/;

	public final native String getTaskStory() /*-{ return this.TaskStory }-*/;
	public final native void setTaskStory(String story) /*-{ this.TaskStory = story; }-*/;

	
	
	public final Task toTask(List<Story> stories) {
		Task t = new Task(getTaskType(), getUniqueID());
		t.setDescription(getTaskDescription());
		TaskState ts = TaskState.valueOf(getTaskState());
		t.setTaskState(ts);
		
		String storyName = getTaskStory();
		for (Story story : stories) {
			if(story.getStoryName().equals(storyName)){
				t.setStory(story);
				break;
			}
		}
		
		return t;
	}

}
