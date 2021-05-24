import { CommonModule } from '@angular/common';
import { DeleteImageGlyphiconComponent }
	from './delete-image-glyphicon_component/delete-image-glyphicon.component';
import { HoverableContainerModule } from '@app/shared/modules/hoverable-container_module/hoverable-container.module';
import { HTMLImageModule } from '@app/shared/modules/html-image_module/html-image.module';
import { ImageActionMenuModule } from '../image-action-menu_module/image-action-menu.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent }
	from './thumbnail-image-container_component/thumbnail-image-container.component';
import { ThumbnailImageComponent } from './thumbnail-image.component';


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
		RouterModule,
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {}
