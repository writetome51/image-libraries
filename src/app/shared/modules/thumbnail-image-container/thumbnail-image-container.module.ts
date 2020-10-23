import { AppActionMenuModule } from '@app-action-menu/app-action-menu.module';
import { CommonModule } from '@angular/common';
import { DeleteImageGlyphiconComponent }
	from './delete-image-glyphicon/delete-image-glyphicon.component';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { HTMLImageModule } from '@app/shared/modules/html-image/html-image.module';
import { ImgZoomOnScrollDirective } from '@thumbnail-image-container/img-zoom-on-scroll.directive';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';
import { ThumbnailImageComponent } from './thumbnail-image/thumbnail-image.component';


@NgModule({
	declarations: [
		ThumbnailImageComponent,
		ThumbnailImageContainerComponent,
		DeleteImageGlyphiconComponent,
		ImgZoomOnScrollDirective
	],
	imports: [
		CommonModule,
		AppActionMenuModule,
		HoverableContainerModule,
		HTMLImageModule,
		RouterModule
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
