package com.scrumzilla.client.taskcontribution;

public interface ScrumzillaTaskTypeContribution {
	public String getTaskType();
	public String getDisplayName();
	public ScrumzillaTaskEditingUI getTaskTypeUI();
//	public ScrumzillaWaveStateCodec getWaveStateCodec();

}
