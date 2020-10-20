import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTMLImageComponent } from './html-image.component';
import { ImgZoomDirective } from '@app/shared/modules/html-image/img-zoom.directive';


@NgModule({
	declarations: [HTMLImageComponent, ImgZoomDirective],
	imports: [CommonModule],
	exports: [HTMLImageComponent]
})
export class HTMLImageModule {
}
