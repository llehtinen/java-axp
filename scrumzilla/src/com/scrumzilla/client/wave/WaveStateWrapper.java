package com.scrumzilla.client.wave;

import java.util.HashMap;

public class WaveStateWrapper implements WaveState {
	public WaveStateWrapper(){
	}

	public String get(String key) {
		State s = getState();
		if(s == null){
			return null; 
		} else {
			return s.get(key);	
		}
	}

	public String get(String key, String optDefault) {
		State s = getState();
		if(s == null){
			return null; 
		} else {
			return s.get(key, optDefault);	
		}
	}

	public Integer getInt(String key) {
		State s = getState();
		if(s == null){
			return null; 
		} else {
			return s.getInt(key);	
		}
	}

	public void submitDelta(HashMap<String, String> delta) {
		State s = getState();
		if(s != null){
			s.submitDelta(delta); 
		}
	}

	private State getState() {
		return State.getState();
	}

}
