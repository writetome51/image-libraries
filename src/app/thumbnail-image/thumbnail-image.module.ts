import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailImageComponent } from './thumbnail-image.component';
import { DeleteImageButtonComponent } from './delete-image-button/delete-image-button.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		ThumbnailImageComponent,
		DeleteImageButtonComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [ThumbnailImageComponent]
})
export class ThumbnailImageModule {
}
