package com.scrumzilla.client.ui;

import java.util.List;

import com.allen_sauer.gwt.dnd.client.PickupDragController;
import com.allen_sauer.gwt.dnd.client.drop.IndexedDropController;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.IndexedPanel;
import com.google.gwt.user.client.ui.Widget;
import com.scrumzilla.client.ScrumzillaTaskTypeRegistry;
import com.scrumzilla.client.controller.ScrumzillaController;
import com.scrumzilla.client.events.AddTaskEventHandler;
import com.scrumzilla.client.events.AddedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEvent;
import com.scrumzilla.client.events.EditedTaskEventHandler;
import com.scrumzilla.client.events.RemovedTaskFromStoryEvent;
import com.scrumzilla.client.events.RemovedTaskFromStoryEventHandler;
import com.scrumzilla.client.model.Story;
import com.scrumzilla.client.model.Task;
import com.scrumzilla.client.model.Task.TaskState;

public class TasksInStatePanel extends Composite implements EditedTaskEventHandler, AddTaskEventHandler, RemovedTaskFromStoryEventHandler {
	private static final class TaskListDropController extends IndexedDropController {
		private ScrumzillaController fController;
		private Story fTargetStory;
		private TaskState fTargetState;
		private TaskListDropController(IndexedPanel dropTarget, ScrumzillaController controller, Story targetStory, TaskState state) {
			super(dropTarget);
			fController = controller;
			fTargetStory = targetStory;
			fTargetState = state;
		}

		public void onDrop(com.allen_sauer.gwt.dnd.client.DragContext context) {
			super.onDrop(context);
			
			if(context.draggable instanceof TaskPanel){
				TaskPanel tp = (TaskPanel)context.draggable;
				
				//if stories mismatched, change story. Then set task type
				Task task = tp.getTask();
				if(!task.getStory().equals(fTargetStory)){
					fController.moveTaskToStory(fTargetStory, task);	
				}
				fController.changeTaskState(task, fTargetState);
			}
		}
	}

	private final ScrumzillaController fController;
	private final ScrumzillaTaskTypeRegistry fTaskTypeRegistry;
	private final TaskState fState;
	private final Story fStory;

	
	private HorizontalPanel fPanel;
	private PickupDragController fDragController;
	private TaskListDropController fDropController;

	

	public TasksInStatePanel(Story story, TaskState taskState, PickupDragController dragController, ScrumzillaController controller, ScrumzillaTaskTypeRegistry taskTypeRegistry) {
		fController = controller;
		fTaskTypeRegistry = taskTypeRegistry;
		fState = taskState;
		fStory = story;
		
		fPanel = new HorizontalPanel();
		fPanel.setStyleName("scrumzilla-taskUI-tasksInStatePanel");
		initWidget(fPanel);
		
		fDragController = dragController;
		fDropController = new TaskListDropController(fPanel, fController, fStory, fState);
		dragController.registerDropController(fDropController);
		
		
		initUI();
		
		fController.getHandlerManager().addHandler(EditedTaskEvent.TYPE, this);
		fController.getHandlerManager().addHandler(AddedTaskEvent.TYPE, this);
		fController.getHandlerManager().addHandler(RemovedTaskFromStoryEvent.TYPE, this);
		

		
	}

	private void initUI() {
		List<Task> tasksForStory = fController.getModel().getTasksForStory(fStory);
		boolean addedTask = false;
		for (Task task : tasksForStory) {
			if(task.getTaskState() == fState){
				TaskPanel taskPanel = new TaskPanel(fController, task, fTaskTypeRegistry.lookupTaskType(task.getTaskType()));
				fDragController.makeDraggable(taskPanel, taskPanel.getDragHandle());
				fPanel.add(taskPanel);
				addedTask = true;
			}
		}
		
		if(!addedTask){
			fPanel.setStyleName("scrumzilla-taskUI-emptyTaskList");
		} else {
			fPanel.setStyleName("scrumzilla-taskUI-taskList");
		}
	}

	public void editedTask(EditedTaskEvent e) {
		if(e.fTask.getStory().equals(fStory)){
			cleanupTasksPanel();
			fPanel.clear();
			initUI();
		}
	}

	public void addedTask(AddedTaskEvent addTaskEvent) {
		if(addTaskEvent.fTask.getStory().equals(fStory)){
			cleanupTasksPanel();
			fPanel.clear();
			initUI();
		}
	}

	public void removedTaskFromStory(RemovedTaskFromStoryEvent e) {
		if(e.fStoryRemovedFrom.equals(fStory)){
			cleanupTasksPanel();
			fPanel.clear();
			initUI();
		}		
	}
	
	@Override
	protected void onDetach() {
		
		cleanupTasksPanel();
		fDragController.unregisterDropController(fDropController);
		
		
		//internal cleanup
		fController.getHandlerManager().removeHandler(EditedTaskEvent.TYPE, this);
		fController.getHandlerManager().removeHandler(AddedTaskEvent.TYPE, this);
		fController.getHandlerManager().removeHandler(RemovedTaskFromStoryEvent.TYPE, this);
		
		super.onDetach();
		
		
		
		
	}

	private void cleanupTasksPanel() {
		//clean up D&D listeners
		for(int i = 0; i < fPanel.getWidgetCount(); i++){
			Widget w = fPanel.getWidget(i);
			if(w instanceof TaskPanel){
				fDragController.makeNotDraggable(w);
				((TaskPanel)w).cleanupTaskPanel();
			}
		}
	}
	

}
