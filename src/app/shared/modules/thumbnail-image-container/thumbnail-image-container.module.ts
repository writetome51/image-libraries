import { AppActionMenuModule } from '@app-action-menu/app-action-menu.module';
import { CommonModule } from '@angular/common';
import { DeleteImageGlyphiconComponent }
	from './delete-image-glyphicon/delete-image-glyphicon.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';
import { HoverableContainerModule }
	from '@app/shared/modules/hoverable-container/hoverable-container.module';
import { ThumbnailImageComponent } from './thumbnail-image/thumbnail-image.component';
import { AppImageModule } from '@app/shared/modules/app-image/app-image.module';


@NgModule({
	declarations: [
		ThumbnailImageComponent,
		ThumbnailImageContainerComponent,
		DeleteImageGlyphiconComponent
	],
	imports: [
		CommonModule,
		AppActionMenuModule,
		HoverableContainerModule,
		AppImageModule,
		RouterModule
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
