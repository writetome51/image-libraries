import { CommonModule } from '@angular/common';
import { DeleteImageGlyphiconComponent }
	from './delete-image-glyphicon/delete-image-glyphicon.component';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { HTMLImageModule } from '@html-image/html-image.module';
import { ImageActionMenuModule } from '@image-action-menu/image-action-menu.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';
import { ThumbnailImageComponent } from './thumbnail-image/thumbnail-image.component';
import { ZoomableHTMLImageModule } from './zoomable-html-image/zoomable-html-image.module';


@NgModule({
	declarations: [
		ThumbnailImageComponent,
		ThumbnailImageContainerComponent,
		DeleteImageGlyphiconComponent,
	],
	imports: [
		CommonModule,
		ImageActionMenuModule,
		HoverableContainerModule,
		HTMLImageModule,
		ZoomableHTMLImageModule,
		RouterModule,
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
