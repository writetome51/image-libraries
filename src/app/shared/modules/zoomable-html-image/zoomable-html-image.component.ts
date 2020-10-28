import { Component } from '@angular/core';
import { HTMLImageComponent } from '@html-image/html-image.component';


@Component({
	selector: 'zoomable-html-image',
	template: `
		<!--  Setting draggable to false on img prevents a ghost-image from being dragged.  -->
		<img draggable="false" imgZoomOnScroll
			 [src]="data.src" [alt]="data.alt" [width]="data.width" [title]="data.title"
		/>
	`
})
export class ZoomableHTMLImageComponent extends HTMLImageComponent {
}
