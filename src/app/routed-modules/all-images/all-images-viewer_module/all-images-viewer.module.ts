import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationControlsModule }
	from '@app-pagination-controls/app-pagination-controls.module';
import { AllImagesViewerComponent }
	from './all-images-viewer.component';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { ImageListComponent } from './image-list.component';
import { ImageSizeSliderModule } from '@image-size-slider/image-size-slider.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container/thumbnail-image-container.module';


@NgModule({
	declarations: [
		AllImagesViewerComponent,
		AllImagesPaginationControlsComponent,
		ImageListComponent
	],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		AppPaginationControlsModule,
		ImageSizeSliderModule,
		ThumbnailImageContainerModule,
	],
	exports: [AllImagesViewerComponent]
})
export class AllImagesViewerModule {}
