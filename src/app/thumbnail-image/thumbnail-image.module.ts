import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThumbnailImageComponent } from './thumbnail-image.component';


@NgModule({
	declarations: [
		ThumbnailImageComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [ThumbnailImageComponent]
})
export class ThumbnailImageModule {
}
