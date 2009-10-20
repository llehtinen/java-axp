package wave.test.client;

import com.google.gwt.gadgets.client.GadgetFeature;

@GadgetFeature.FeatureName(value = "rpc")
public interface NeedsRPC {
    public void dummyNeedsRpcMethod(RpcFeature feature);
   }
