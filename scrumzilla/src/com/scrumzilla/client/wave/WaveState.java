package com.scrumzilla.client.wave;

import java.util.HashMap;

public interface WaveState {

	/**
	 * Retrieve a value from the synchronized state. As of now, get always
	 * returns a string. This will change at some point to return whatever was
	 * set.
	 * 
	 * @param key
	 *            Value for the specified key to retrieve.
	 */
	public abstract String get(String key) /*-{
											return this.get(key);
											}-*/;

	/**
	 * Retrieve a value from the synchronized state and returns it as an
	 * Integer.
	 * 
	 * @param key
	 *            Value for the specified key to retrieve.
	 * @return
	 */
	public abstract Integer getInt(String key);

	/**
	 * Retrieve a value from the synchronized state. As of now, get always
	 * returns a string. This will change at some point to return whatever was
	 * set.
	 * 
	 * @param key
	 *            Value for the specified key to retrieve.
	 * @param opt_default
	 *            Optional default value if nonexistent
	 */
	public abstract String get(String key, String opt_default) /*-{
																return this.get(key, opt_default);
																}-*/;

	/**
	 * Updates the state delta. This is an asynchronous call that will update
	 * the state and not take effect immediately. Creating any key with a null
	 * value will attempt to delete the key.
	 * 
	 * @param delta
	 *            Map of key-value pairs representing a delta of keys to update
	 */
	public abstract void submitDelta(HashMap<String, String> delta);

}