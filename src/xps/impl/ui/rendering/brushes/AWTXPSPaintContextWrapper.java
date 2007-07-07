package xps.impl.ui.rendering.brushes;

import java.awt.PaintContext;
import java.awt.image.ColorModel;
import java.awt.image.Raster;

public class AWTXPSPaintContextWrapper extends AWTXPSPaintContext {

	private PaintContext mContext;

	public AWTXPSPaintContextWrapper(PaintContext context, ColorModel cm, PaintContext opacityPaintContext) {
		super(cm, opacityPaintContext);
		mContext = context;
	}
	
	public void dispose() {
		mContext.dispose();
	}


	@Override
	protected Raster getSourceRaster(int x, int y, int w, int h) {
		return mContext.getRaster(x, y, w, h);
	}

	
}
