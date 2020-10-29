import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomableHTMLImageComponent } from './zoomable-html-image.component';
import { ImgZoomOnScrollDirective } from './img-zoom-on-scroll.directive';
import { HTMLImageModule } from '@html-image/html-image.module';


@NgModule({
	declarations: [ZoomableHTMLImageComponent, ImgZoomOnScrollDirective],
	imports: [CommonModule, HTMLImageModule],
	exports: [ZoomableHTMLImageComponent]
})
export class ZoomableHTMLImageModule {
}
