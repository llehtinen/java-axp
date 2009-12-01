package com.scrumzilla.client.model;

public class Task {
	
	/*
	 * Warning! Changing these enum constants could affect wave state -> java mapping
	 */
	public static enum TaskState {
		TODO,
		IN_PROGRESS,
		WORK_COMPLETED,
		CLOSED
	}
	
	private final String fTaskType;	//eg. Scrumzilla, Bugzilla, Google Code bug track
	private final String fUniqueID; //Task ID. String to be flexible (eg. Jira-style IDs are not strictly numeric)
	
	private String fDescription = ""; 						//not nullable
	private TaskState fTaskState = TaskState.TODO;			//not nullable 	
	
	
	private String fAssigneeParticipantID; 	//nullable
	private Story fStory; 					//nullable -> ie. when created by robot, will not know story
	
	
	public Task(String taskType, String uniqueID) {
		super();
		fTaskType = taskType;
		fUniqueID = uniqueID;
	}


	public String getAssigneeParticipantID() {
		return fAssigneeParticipantID;
	}


	public void setAssigneeParticipantID(String assigneeParticipantID) {
		fAssigneeParticipantID = assigneeParticipantID;
	}


	public Story getStory() {
		return fStory;
	}


	public void setStory(Story story) {
		fStory = story;
	}


	public String getDescription() {
		return fDescription;
	}


	public void setDescription(String description) {
		if(description == null){
			throw new IllegalArgumentException("Task description not nullable");
		}
		fDescription = description;
	}


	public String getTaskType() {
		return fTaskType;
	}


	public String getUniqueID() {
		return fUniqueID;
	}


	public TaskState getTaskState() {
		return fTaskState;
	}


	public void setTaskState(TaskState taskState) {
		if(taskState == null){
			throw new IllegalArgumentException("Task state not nullable");
		}

		fTaskState = taskState;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fUniqueID == null) ? 0 : fUniqueID.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		if (fUniqueID == null) {
			if (other.fUniqueID != null)
				return false;
		} else if (!fUniqueID.equals(other.fUniqueID))
			return false;
		return true;
	}
	
	

}
