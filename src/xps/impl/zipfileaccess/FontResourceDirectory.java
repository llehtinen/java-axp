package xps.impl.zipfileaccess;

import java.util.zip.ZipEntry;

import xps.api.XPSSpecError;

public class FontResourceDirectory {

	private static final int BYTE_INDEX_MAP[] = new int[] {
		3, 2, 1, 0,
		5,4,
		7,6,
		8,9,
		10,11,12,13,14,15
	};
	
	public static short[] calcFontGUID(ZipEntry ze) throws XPSSpecError {
		String name = ze.getName();
		String parts[] = name.split("\\/");
		String lastSegment = parts[parts.length - 1];
		int sep = lastSegment.lastIndexOf('.');
		if(sep > -1){
			//remove extension
			lastSegment = lastSegment.substring(0, sep);
		}
		
		//guid is 16 bytes
		short guidPartsInReadOrder[] = new short[16];
		
		//should be the obfuscated name
		int i = 0; //loop counter
		int j = 0; //string position
		
		while(i < guidPartsInReadOrder.length){
			char c1 = lastSegment.charAt(j++);
			if(c1 == '-'){
				continue;
			}
			
			char c2 = lastSegment.charAt(j++);
			if(c1 == '-'){
				throw new XPSSpecError(2,54,"Invalid font name: " + ze.getName());
			}
			guidPartsInReadOrder[i++] = Short.parseShort("" + c1 + "" + c2, 16);
		}
		
		
//		short guidPartsRealOrder[] = new short[16];
//		for (int k = 0; k < guidPartsRealOrder.length; k++) {
//			guidPartsRealOrder[k] = guidPartsInReadOrder[BYTE_INDEX_MAP[k]];
//		}
		
		return guidPartsInReadOrder;
	}
}
