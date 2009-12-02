package com.scrumzilla.client.wave;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.event.shared.HandlerManager;
import com.scrumzilla.client.events.ModelChangedEvent;

public class MockWaveState implements WaveState {
	
	private Map<String, String> fMap = new HashMap<String, String>();
	private HandlerManager fHandlerManager;

	public MockWaveState(HandlerManager handerManager) {
		fHandlerManager = handerManager;
	}
	
	public String get(String key) {
		return fMap.get(key);
	}

	public String get(String key, String optDefault) {
		if(!fMap.containsKey(key)){
			return optDefault;
		} else {
			return get(key);
		}
	}

	public Integer getInt(String key) {
		if(fMap.containsKey(key)){
			return Integer.parseInt(get(key));
		} else {
			return null;
		}
	}

	public void submitDelta(HashMap<String, String> delta) {
		for (Map.Entry<String, String> entry : delta.entrySet()) {
			if(entry.getValue() != null){
				fMap.put(entry.getKey(), entry.getValue());
			} else {
				fMap.remove(entry.getKey());
			}
		}
		fHandlerManager.fireEvent(new ModelChangedEvent());
	}


}
