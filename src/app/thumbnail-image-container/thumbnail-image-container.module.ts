import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';
import { DeleteImageGlyphiconComponent } from './delete-image-glyphicon/delete-image-glyphicon.component';


@NgModule({
	declarations: [ThumbnailImageContainerComponent, DeleteImageGlyphiconComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
