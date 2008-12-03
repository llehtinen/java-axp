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

package javaaxp.swingviewer;

import java.awt.Graphics2D;

import javaaxp.core.service.model.document.page.ICanvas;
import javaaxp.core.service.model.document.page.IFixedPage;
import javaaxp.core.service.model.document.page.IGlyphs;
import javaaxp.core.service.model.document.page.IPath;

public interface IXPSRenderingExtension {
	void renderedPage(IFixedPage page, Graphics2D g2);
	void renderedCanvas(ICanvas canvas, Graphics2D g2);
	void renderedGlyphs(IGlyphs glyphs, Graphics2D g2);
	void renderedPath(IPath path, Graphics2D g2s);
}
