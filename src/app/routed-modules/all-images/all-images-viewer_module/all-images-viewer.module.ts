import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationControlsModule }
	from '@app/shared/modules/app-pagination-controls_module/app-pagination-controls.module';
import { AllImagesViewerComponent }
	from './all-images-viewer.component';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { GlobalActionMenuModule } from '@app/shared/modules/global-action-menu_module/global-action-menu.module';
import { ImageListComponent } from './image-list.component';
import { ImageSizeSliderModule } from '@app/shared/modules/image-size-slider_module/image-size-slider.module';
import { ThumbnailImageContainerModule }
	from '@app/shared/modules/thumbnail-image-container_module/thumbnail-image-container.module';


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
