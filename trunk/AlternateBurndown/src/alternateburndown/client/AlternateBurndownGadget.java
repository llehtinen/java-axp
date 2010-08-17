package alternateburndown.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.Gadget.ModulePrefs;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.visualization.client.Query;
import com.google.gwt.visualization.client.QueryResponse;
import com.google.gwt.visualization.client.VisualizationUtils;
import com.google.gwt.visualization.client.Query.Callback;

@ModulePrefs(title = "SimpleGadget", author = "yournamehere", author_email = "yournamehere@gmail.com")
public class AlternateBurndownGadget extends Gadget<VisualizationGadgetPreferences> implements Callback {

	private Button mSimpleButton;

	
	
	@Override
	protected void init(final VisualizationGadgetPreferences preferences) {
		//build the UI
	    mSimpleButton = new Button("SimpleGadget");
	    mSimpleButton.addClickHandler(new ClickHandler() {
	      public void onClick(ClickEvent event) {
	        Window.alert("Hello World!");
	      }
	    });
	    RootPanel.get().add(mSimpleButton);
		
	    Runnable onLoadCallback = new Runnable() {
	        public void run() {
	        	handleVisualizationLoad(preferences);
	        }
	      };
		VisualizationUtils.loadVisualizationApi(onLoadCallback);
	}

	protected void handleVisualizationLoad(VisualizationGadgetPreferences preferences) {
		Query q = Query.create(preferences._table_query_url().getValue());
		q.send(this);
	}

	public void onResponse(QueryResponse response) {
		//do stuff for the first column
		String data = "";
		for(int i = 0; i < response.getDataTable().getNumberOfRows(); i++){
			data += response.getDataTable().getFormattedValue(i, 0) + ",";
		}
		mSimpleButton.setText(data);
	}

}
