import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';
import { AllImagesViewerComponent } from './all-images-viewer.component';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { AllImagesListComponent } from './all-images-list.component';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';
import { ImagesListContainerModule }
	from '@app/shared/modules/images-list-container_module/images-list-container.module';


@NgModule({
	declarations: [
		AllImagesViewerComponent,
		AllImagesPaginationControlsComponent,
		AllImagesListComponent
	],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		AppPaginationControlsModule,
		ImagesListContainerModule,
		ImageSizeSliderModule,
		ThumbnailImageContainerModule,
	],
	exports: [AllImagesViewerComponent]
})
export class AllImagesViewerModule {}
