import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllImagesViewerContainerComponent } from './all-images-viewer-container.component';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { AllImagesListComponent } from './all-images-list.component';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';
import { ImagesListContainerModule }
	from '@app/shared/modules/images-list-container_module/images-list-container.module';


@NgModule({
	declarations: [
		AllImagesViewerContainerComponent,
		AllImagesListComponent
	],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		ImagesListContainerModule,
		ImageSizeSliderModule,
		ThumbnailImageContainerModule,
	],
	exports: [AllImagesViewerContainerComponent]
})
export class AllImagesViewerModule {}
