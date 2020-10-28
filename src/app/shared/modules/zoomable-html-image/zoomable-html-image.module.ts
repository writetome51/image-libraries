import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomableHTMLImageComponent } from './zoomable-html-image.component';
import { ImgZoomOnScrollDirective } from './img-zoom-on-scroll.directive';


@NgModule({
	declarations: [ZoomableHTMLImageComponent, ImgZoomOnScrollDirective],
	imports: [CommonModule],
	exports: [ZoomableHTMLImageComponent]
})
export class ZoomableHTMLImageModule {
}
