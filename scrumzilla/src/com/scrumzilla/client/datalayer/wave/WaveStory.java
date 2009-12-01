package com.scrumzilla.client.datalayer.wave;

import com.google.gwt.core.client.JavaScriptObject;
import com.scrumzilla.client.model.Story;

class WaveStory extends JavaScriptObject {
	
	protected WaveStory() {
		
	}
	
	public final native String getStoryName() /*-{ return this.StoryName; }-*/;
	  
	public final native void setStoryName(String storyName) /*-{ this.StoryName = storyName; }-*/;

	public final Story toStory() {
		return new Story(getStoryName());
	}

}
