import { AllImagesListComponent } from './all-images-list.component';
import { AllImagesViewerComponent } from './all-images-viewer.component';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { ImagesViewerModule }
	from '@modules/images-viewer_module/images-viewer.module';
import { NgModule } from '@angular/core';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';


@NgModule({
	declarations: [
		AllImagesViewerComponent,
		AllImagesListComponent
	],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		ImagesViewerModule,
		ImageSizeSliderModule,
		ThumbnailImageContainerModule,
	],
	exports: [AllImagesViewerComponent]
})
export class AllImagesViewerModule {}
