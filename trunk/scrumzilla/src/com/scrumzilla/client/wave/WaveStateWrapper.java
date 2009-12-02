package com.scrumzilla.client.wave;

import java.util.HashMap;

public class WaveStateWrapper implements WaveState {
	private final State fState;

	public WaveStateWrapper(State s){
		fState = s;
	}

	public String get(String key) {
		return fState.get(key);
	}

	public String get(String key, String optDefault) {
		return fState.get(key, optDefault);
	}

	public Integer getInt(String key) {
		return fState.getInt(key);
	}

	public void submitDelta(HashMap<String, String> delta) {
		fState.submitDelta(delta);

	}

}
