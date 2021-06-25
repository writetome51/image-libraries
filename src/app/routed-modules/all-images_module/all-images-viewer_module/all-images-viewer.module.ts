import { AllImagesListComponent } from './all-images-list.component';
import { AllImagesViewerComponent } from './all-images-viewer.component';
import { CommonModule } from '@angular/common';
import { ImagesViewerModule } from '@images-viewer_module/images-viewer.module';
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
		ThumbnailImageContainerModule,
		ImagesViewerModule,
	],
	exports: [AllImagesViewerComponent]
})
export class AllImagesViewerModule {}
