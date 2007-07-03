package xps;


public class LinkTargetNotFoundException extends XPSError {

	public LinkTargetNotFoundException(String target) {
		super("Link target " + target + " not found");
	}

}
