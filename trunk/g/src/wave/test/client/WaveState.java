/*
 * Copyright (c) 2009, Lombardi Software
 *  All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above
 *   copyright notice, this list of conditions and the
 *   following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above
 *   copyright notice, this list of conditions and the
 *   following disclaimer in the documentation and/or other
 *   materials provided with the distribution.
 *
 * * Neither the name of Lombardi software nor the names of its
 *   contributors may be used to endorse or promote products
 *   derived from this software without specific prior
 *   written permission of Lombardi Software
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 * TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package wave.test.client;

import java.util.Map;
import com.google.gwt.core.client.JavaScriptObject;

/**
 * Very basic and initial implementation to provide access to read and update the wave state for a gadget.
 *
 * @author amoffat Alex Moffat
 */
public class WaveState {

    /**
     * Get the current value of the state property with the provided key.
     *
     * @param key The key.
     * @return The value, which is null if it's not been set yet.
     */
    public static native String get(String key) /*-{
        return $wnd.wave.getState().get(key);
    }-*/;

    /**
     * Submit updates to the values of some state properties.
     *
     * @param newValues Map from key to new value for each property to change.
     */
    public static void submitDelta(Map<String, String> newValues) {
        JavaScriptObject json = null;
        for (Map.Entry<String, String> entry : newValues.entrySet()) {
            json = addValue(json, entry.getKey(), entry.getValue());
        }
        submitDelta(json);
    }

    /**
     * Helper method to construct a JavaScript map.
     *
     * @param map The map to update, if null a new map is constructed and returned.
     * @param key The key.
     * @param value The value for the key.
     * @return The updated map.
     */
    private static native JavaScriptObject addValue(JavaScriptObject map, String key, String value) /*-{
        if (!map) {
            map = {};
        }
        map[key] = value;
        return map;
    }-*/;

    /**
     * Submit the JavaScript json object to update the wave state.
     *
     * @param json The updates.
     */
    private static native void submitDelta(JavaScriptObject json) /*-{
        $wnd.wave.getState().submitDelta(json);
    }-*/;
}
