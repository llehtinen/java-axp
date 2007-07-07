package xps.impl.ui.rendering.brushes;

import java.awt.PaintContext;
import java.awt.image.ColorModel;
import java.awt.image.Raster;
import java.awt.image.WritableRaster;

public abstract class AWTXPSPaintContext implements PaintContext {

	private ColorModel fColourModel;
	private PaintContext fOpacityMaskPaintContext;

	public AWTXPSPaintContext(ColorModel cm, PaintContext opacityPaintContext) {
		fColourModel  = cm;
		fOpacityMaskPaintContext = opacityPaintContext;
	}

	public void dispose() {
		if(fOpacityMaskPaintContext != null){
			fOpacityMaskPaintContext.dispose();
		}
	}

	public ColorModel getColorModel() {
		return fColourModel;
	}

	public Raster getRaster(int x, int y, int w, int h) {
		Raster sourceRaster = getSourceRaster(x,y,w,h);
		if(fOpacityMaskPaintContext != null){
			WritableRaster wr = sourceRaster.createCompatibleWritableRaster();
			wr.setDataElements(0, 0, sourceRaster);

			Raster r = fOpacityMaskPaintContext.getRaster(x, y, w, h);
			//copy the alpha values
			for(int i = 0; i < w; i++){
				for(int j = 0; j < h; j++){
					wr.setSample(i, j, 3, r.getSample(i, j, 3));
				}
			}
			return wr;
		} else {
			return sourceRaster;
		}
		

	}

	protected abstract Raster getSourceRaster(int x, int y, int w, int h);

}
