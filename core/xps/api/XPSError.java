package xps.api;


public class XPSError extends Exception {

	public XPSError(String string) {
		super(string);
	}

	public XPSError(Exception e) {
		super(e);
	}

}
