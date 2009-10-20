package wave.test.client;

import java.util.HashMap;

import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyPressHandler;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
@Gadget.ModulePrefs(title = "Hello Wave World")
public class G extends Gadget<UserPreferences> implements NeedsRPC{


	private static G mInstance;
	private TextBox mTextBox;
	private Label mLabel;

	@Override
	protected void init(UserPreferences preferences) {
		mInstance = this;
		VerticalPanel vp = new VerticalPanel();
		mLabel = new Label();
		mLabel.setHeight("30");
		mLabel.setText("Initial Wave State");
		vp.add(mLabel);
		mTextBox = new TextBox();
		vp.add(mTextBox);
		
		mTextBox.addKeyPressHandler(new KeyPressHandler() {
			public void onKeyPress(KeyPressEvent event) {
				updateState();
			}
		});
		
		RootPanel.get().add(vp);
		
		
		
		registerStateChangeCallback();
	}

	protected void updateState() {
		HashMap<String, String> newState = new HashMap<String, String>();
		newState.put("text", mTextBox.getText().trim());
		WaveState.submitDelta(newState);
	}

	public static void stateUpdated() {
		mInstance.mLabel.setText(WaveState.get("text"));
	}
	
    private native void registerStateChangeCallback() /*-{
    var wave = $wnd.wave;
    if (wave) {
        wave.setStateCallback(@wave.test.client.G::stateUpdated());
    }
	}-*/;

	public void dummyNeedsRpcMethod(RpcFeature feature) {
		// TODO Auto-generated method stub
		
	}


}
