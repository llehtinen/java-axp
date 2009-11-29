package com.scrumzilla.client.ui;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyPressHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.controller.ScrumzillaControllerErrorHandlerAdapter;
import com.scrumzilla.client.model.Story;

public class AddStoryPanel extends Composite {

	private ScrumzillaController fController;
	private VerticalPanel fMainPanel;
	private Button fAddStoryButton;
	private TextBox fStoryName;

	public AddStoryPanel(ScrumzillaController controller) {
		fController = controller;
		
		fMainPanel = new VerticalPanel();
		initWidget(fMainPanel);
		
		layoutWidget();
		
	}

	private void layoutWidget() {
		switchToNonEditMode();
	}

	private void switchToNonEditMode() {
		fMainPanel.clear();
		fAddStoryButton = new Button("Add Story");
		fAddStoryButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				switchToEditMode();
			}
		});
		fMainPanel.add(fAddStoryButton);
	}

	protected void switchToEditMode() {
		fMainPanel.clear();
		fStoryName = new TextBox();
		fStoryName.addKeyPressHandler(new KeyPressHandler() {
			public void onKeyPress(KeyPressEvent event) {
				if(event.getCharCode() == '\r' || event.getCharCode() == '\n'){
					addStory();
				}				
			}
		});
		fMainPanel.add(fStoryName);
		
		
		HorizontalPanel hp = new HorizontalPanel();
		Button cancelButton = new Button("Cancel");
		cancelButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				switchToNonEditMode();
			}
		});
		hp.add(cancelButton);
		
	
		Button okButton = new Button("Ok");
		okButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				addStory();
			}
		});
		hp.add(okButton);
		fMainPanel.add(hp);
		
		fStoryName.setFocus(true);
	}

	private void addStory() {
		Story story = new Story();
		story.setStoryName(fStoryName.getText().trim());
		switchToNonEditMode();
		fController.addStory(story, new  ScrumzillaControllerErrorHandlerAdapter() {
			@Override
			public void storyExists(Story s) {
				Window.alert("Story already exists: " + s.getStoryName());
			}
		});
	}

}
