package com.scrumzilla.client.datalayer.wave;

import com.google.gwt.core.client.JavaScriptObject;

public class ScrumzillaWaveDelta extends JavaScriptObject {
	
	public static final int DELTA_TYPE_ADD_TASK = 1;
	
	protected ScrumzillaWaveDelta() {
		
	}
	
	public final native void setDeltaType(int deltaType) /*-{ this.deltaType = deltaType; }-*/;
	
	public final native int getDeltaType() /*-{ return this.deltaType; }-*/
	;
	
	public final native void setRelatedStory(WaveStory story) /*-{ this.deltaRelatedStory = story; }-*/
	;
	
	public final native WaveStory getRelatedStory() /*-{ return this.deltaRelatedStory; }-*/
	;
	  
	public final native void setRelatedTask(WaveTask task) /*-{ this.deltaRelatedTask = task; }-*/;
	
	public final native WaveTask getRelatedTask() /*-{ return this.deltaRelatedTask; }-*/;

}
