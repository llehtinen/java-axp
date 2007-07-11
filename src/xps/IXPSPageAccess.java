package xps;


public interface IXPSPageAccess {
	public void accept(IXPSVisitor visitor) throws XPSError;
}
