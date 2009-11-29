package com.scrumzilla.client;

import java.util.List;
import java.util.Vector;

import com.scrumzilla.client.taskcontribution.ScrumzillaTaskTypeContribution;

public class ScrumzillaTaskTypeRegistry {

	private List<ScrumzillaTaskTypeContribution> fTaskTypes = new Vector<ScrumzillaTaskTypeContribution>();
	
	public ScrumzillaTaskTypeRegistry(){
		
	}
	
	public ScrumzillaTaskTypeContribution lookupTaskType(String taskType){
		for (ScrumzillaTaskTypeContribution registeredContrubution : fTaskTypes) {
			if(registeredContrubution.getTaskType().equals(taskType)){
				return registeredContrubution;
			}
		}
		return null;
	}
	
	public void registerTaskType(ScrumzillaTaskTypeContribution contribution){
		for (ScrumzillaTaskTypeContribution registeredContrubution : fTaskTypes) {
			if(registeredContrubution.getTaskType().equals(contribution.getTaskType())){
				throw new IllegalArgumentException("Task Type Already Registered");
			}
		}
		
		fTaskTypes.add(contribution);
	}

	public String[] getTaskTypes() {
		String toReturn[] = new String[fTaskTypes.size()];
		for(int i = 0; i < toReturn.length; i++){
			toReturn[i] = fTaskTypes.get(i).getTaskType();
		}
		return toReturn;
	}
	
}
