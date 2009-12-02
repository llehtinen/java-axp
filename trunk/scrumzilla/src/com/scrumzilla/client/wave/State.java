package com.scrumzilla.client.wave;

/* Stolen from google code project */

import java.util.HashMap;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;

/**
 * State class for managing the gadget state.
 */
public class State extends JavaScriptObject implements WaveState {

	/**
	 * JavaScript version of map.
	 * 
	 * @param <V>
	 *            value type
	 */
	private static class JsMap<V> extends JavaScriptObject {

		public static State.JsMap<?> create() {
			return JavaScriptObject.createObject().cast();
		}

		protected JsMap() {
		}

		public final native V unsafeGet(String key) /*-{
			return this[key];
		}-*/;

		public final native V unsafePut(String key, V value) /*-{
			var oldValue = this[key] || null;
			this[key] = value;
			return oldValue || value;
		}-*/;
	}

	protected State() {
	}

	/* (non-Javadoc)
	 * @see com.scrumzilla.client.wave.WaveState#get(java.lang.String)
	 */
	public final native String get(String key) /*-{
		return this.get(key);
	}-*/;

	/* (non-Javadoc)
	 * @see com.scrumzilla.client.wave.WaveState#getInt(java.lang.String)
	 */
	public final Integer getInt(String key) {
		final String value = get(key);

		return value != null ? Integer.decode(value) : null;
	}

	/* (non-Javadoc)
	 * @see com.scrumzilla.client.wave.WaveState#get(java.lang.String, java.lang.String)
	 */
	public final native String get(String key, String opt_default) /*-{
		return this.get(key, opt_default);
	}-*/;

	/**
	 * Retrieve the valid keys for the synchronized state.
	 * 
	 * @return set of keys
	 */
	public final native JsArrayString getKeys() /*-{
		return this.getKeys();
	}-*/;

	public final native void reset() /*-{
		this.reset();
	}-*/;

	/* (non-Javadoc)
	 * @see com.scrumzilla.client.wave.WaveState#submitDelta(java.util.HashMap)
	 */
	public final void submitDelta(HashMap<String, String> delta) {
		final JsMap<String> jsDelta = JsMap.create().cast();

		for (String key : delta.keySet()) {
			jsDelta.unsafePut(key, delta.get(key));
		}
		submitDelta(jsDelta);
	}

	/**
	 * Updates the state delta. This is an asynchronous call that will update
	 * the state and not take effect immediately. Creating any key with a null
	 * value will attempt to delete the key.
	 * 
	 * @param delta
	 *            Map of key-value pairs representing a delta of keys to update
	 */
	public final native void submitDelta(JavaScriptObject delta) /*-{
		this.submitDelta(delta);
	}-*/;

	public final native void submitValue(String key, String value) /*-{
		this.submitValue(key, value);
	}-*/;

	/**
	 * 
	 * @return JavaScriptObject of the wave state
	 */
	public static native WaveState getState() /*-{
		return $wnd.wave.getState();
	}-*/;

}
