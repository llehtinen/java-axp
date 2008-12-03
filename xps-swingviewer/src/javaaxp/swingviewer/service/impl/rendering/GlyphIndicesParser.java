/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer.service.impl.rendering;

public class GlyphIndicesParser {
	public static class  GlyphMapping {
		public final Integer fClusterCodeCount;
		public final Integer fClusterGlyphCount;
		public final int fGlyphIndex;
		
		public GlyphMapping(Integer clusterCodeCount, Integer clusterGlyphCount, int glyphIndex) {
			super();
			fClusterCodeCount = clusterCodeCount;
			fClusterGlyphCount = clusterGlyphCount;
			fGlyphIndex = glyphIndex;
		}
		
	}
	
	public static class GlyphIndicesEntry {
		public final GlyphMapping fGlyphMapping;
		public final GlyphMetrics fGlyphMetrics;
		public GlyphIndicesEntry(GlyphMetrics glyphMetrics, GlyphMapping glyphMapping) {
			super();
			fGlyphMetrics = glyphMetrics;
			fGlyphMapping = glyphMapping;
		}
	}
	
	public static class GlyphMetrics {
		public final Double fAdvance;
		public final Double fUOffset;
		public final Double fVOffset;
		public GlyphMetrics(Double advance, Double uoffset, Double voffset) {
			super();
			fAdvance = advance;
			fUOffset = uoffset;
			fVOffset = voffset;
		}
	}
	
	
	public GlyphIndicesParser() {
		
	}
	
	public GlyphIndicesEntry[] parse(String indices){
		String entriesText[] = indices.split("\\;");
		GlyphIndicesEntry glyphIndicesEntries[] = new GlyphIndicesEntry[entriesText.length];
		for(int i = 0; i < entriesText.length; i++){
			String entry = entriesText[i].trim();
			if(entry.length() == 0){
				glyphIndicesEntries[i] = null; 
			} else {
				glyphIndicesEntries[i] = parseGlyphIndicesEntry(entry);
			}
		}
		return glyphIndicesEntries;
	}

	private GlyphIndicesEntry parseGlyphIndicesEntry(String string) {
		GlyphMetrics metrics = null;
		GlyphMapping glyphMapping = null;
		
		int commaIdx = string.indexOf(",");
		
		if(commaIdx < 0){
			glyphMapping = parseGlyphMapping(string);
		} else {
			String advanceStr = string.substring(commaIdx + 1);
			String glyphMappingStr = string.substring(0, commaIdx);
			if(glyphMappingStr.trim().length() > 0){
				glyphMapping = parseGlyphMapping(glyphMappingStr);
				metrics = parseGlyphMetrics(advanceStr);
			} else {
				metrics = parseGlyphMetrics(advanceStr);
			}
		}
		return new GlyphIndicesEntry(metrics, glyphMapping);
	}

	private GlyphMetrics parseGlyphMetrics(String advanceStr) {
		String metricsComponents[] = advanceStr.split("\\,");
		Double advance = null;
		Double uoffset = null;
		Double vOffset = null;
		
		switch(metricsComponents.length){
			case 3:
				vOffset = parseRealNum(metricsComponents[2]); 
			case 2:
				uoffset = parseRealNum(metricsComponents[1]);	
			case 1:
				advance = parseRealNum(metricsComponents[0]);
		}
		return new GlyphMetrics(advance, uoffset, vOffset);
	}

	private Double parseRealNum(String string) {
		string = string.toUpperCase();
		boolean positive = true;
		string = string.trim();
		if(string.startsWith("+")){
			string = string.substring(1);
		} else if(string.startsWith("-")){
			positive = false;
			string = string.substring(1);
		}
		
		int exponentIdx = string.indexOf('E');
		if(exponentIdx < 0){
			double d = Double.parseDouble(string);
			if(!positive){
				d = -d;
			}
			return d;
		} else {
			double base = Double.parseDouble(string.substring(0, exponentIdx));
			if(!positive){
				base = -base;
			}
			String exponentStr = string.substring(exponentIdx + 1).trim();
			boolean positiveExponent = true;
			if(exponentStr.startsWith("+")){
				exponentStr = exponentStr.substring(1);
			} else if(exponentStr.startsWith("-")){
				positiveExponent = false;
				exponentStr = exponentStr.substring(1);
			}
			
			int exponent = Integer.parseInt(exponentStr);
			if(!positiveExponent){
				exponent = -exponent;
			}

			return base * Math.pow(10, exponent);
		}
	}

	private GlyphMapping parseGlyphMapping(String string) {
		Integer clusterCodeCount = null;
		Integer clusterGlyphCount = null;
		int glyphIndex;
		int i = string.indexOf('(');
		int j = string.indexOf(')');
		if(i < 0 || j < 0){
			glyphIndex = Integer.parseInt(string.trim());
		} else {
			String clusterStr = string.substring(i, j - i);
			int colonLoc = clusterStr.indexOf(':');
			if(colonLoc < 0){
				clusterCodeCount = Integer.parseInt(clusterStr.trim());
			} else {
				clusterCodeCount = Integer.parseInt(clusterStr.substring(0, colonLoc).trim());
				clusterCodeCount = Integer.parseInt(clusterStr.substring(colonLoc + 1).trim());
			}
			glyphIndex = Integer.parseInt(string.substring(i + 1).trim());
		}
		
		return new GlyphMapping(clusterCodeCount, clusterGlyphCount, glyphIndex);
	}
}
