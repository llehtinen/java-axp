package javaaxp.core.service;


public class XPSSpecError extends XPSError {

	public XPSSpecError(int i, int j, String string) {
		super("XPS Spec Violation: " + i + "." + j + ": " + string);
	}

}
