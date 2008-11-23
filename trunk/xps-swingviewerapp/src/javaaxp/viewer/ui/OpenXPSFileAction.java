package javaaxp.viewer.ui;

import java.io.File;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.FileDialog;
import org.eclipse.ui.IWorkbenchWindow;

public class OpenXPSFileAction extends Action implements IAction {


	private IWorkbenchWindow fWindow;

	public OpenXPSFileAction(IWorkbenchWindow w) {
		super("Open");
		fWindow = w;
	}
	
	@Override
	public void run() {
		FileDialog fd = new FileDialog(fWindow.getShell(), SWT.OPEN);
		fd.setText("Open XPS File");
		fd.setFilterExtensions(new String[] {"*.xps", "*.*"});
		String selected = fd.open();
		if(selected == null){
			return;
		}
		
		File f = new File(selected);
		if(!f.exists()){
			return;
		} else {
			View v = (View)fWindow.getActivePage().findView(View.ID);
			v.viewXPSFile(f);
		}
	}


}
