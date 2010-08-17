package alternateburndown.client;

import com.google.gwt.gadgets.client.StringPreference;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.gadgets.client.UserPreferences.PreferenceAttributes.Options;

public interface VisualizationGadgetPreferences extends UserPreferences {
	
	@PreferenceAttributes(display_name="Data source url",options=Options.REQUIRED)
	StringPreference _table_query_url();

	@PreferenceAttributes(display_name="Sprint Start Date",options=Options.NORMAL)
	StringPreference sprintStartDate();
	
	@PreferenceAttributes(display_name="Sprint Length",options=Options.NORMAL)
	StringPreference sprintLength();

	
	@PreferenceAttributes(display_name="Initial Backlog Size",options=Options.NORMAL)
	StringPreference initialBacklogSize();

	
	

	
	
}
