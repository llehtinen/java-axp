package com.scrumzilla.client.model;


public class Story {
	
	public static final Story UNASSIGNED_STORY = new Story("Unassigned");
	
	private String fStoryName;

	public Story(String storyName) {
		this();
		setStoryName(storyName);
	}

	public Story() {
	}

	public String getStoryName() {
		return fStoryName;
	}

	public void setStoryName(String storyName) {
		fStoryName = storyName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fStoryName == null) ? 0 : fStoryName.hashCode());
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
		Story other = (Story) obj;
		if (fStoryName == null) {
			if (other.fStoryName != null)
				return false;
		} else if (!fStoryName.equals(other.fStoryName))
			return false;
		return true;
	}
	
	
	

}
