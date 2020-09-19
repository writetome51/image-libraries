import { AppActionMenuModule } from '@app-action-menu/app-action-menu.module';
import { CommonModule } from '@angular/common';
import { DeleteImageGlyphiconComponent }
	from './delete-image-glyphicon/delete-image-glyphicon.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';


@NgModule({
	declarations: [ThumbnailImageContainerComponent, DeleteImageGlyphiconComponent],
	imports: [
		CommonModule,
		AppActionMenuModule,
		RouterModule
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
