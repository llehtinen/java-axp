package alternateburndown.client;

import com.google.gwt.gadgets.client.StringPreference;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.gadgets.client.UserPreferences.PreferenceAttributes.Options;

public interface VisualizationGadgetPreferences extends UserPreferences {
	
	@PreferenceAttributes(display_name="Data source url",options=Options.REQUIRED)
	StringPreference _table_query_url();
	
}
