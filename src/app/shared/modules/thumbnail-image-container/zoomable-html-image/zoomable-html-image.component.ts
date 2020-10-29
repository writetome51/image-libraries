import { Component } from '@angular/core';
import { HTMLImageComponent } from '@html-image/html-image.component';


@Component({
	selector: 'zoomable-html-image',
	template: `<html-image imgZoomOnScroll [data]="data"></html-image>`
})
export class ZoomableHTMLImageComponent extends HTMLImageComponent {
}
