import { AllImagesListComponent } from './all-images-list.component';
import { AllImagesViewerComponent } from './all-images-viewer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowImagesIfTheyExistModule }
	from '@app/shared/modules/show-images-if-they-exist_module/show-images-if-they-exist.module';
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
		ShowImagesIfTheyExistModule,
	],
	exports: [AllImagesViewerComponent]
})
export class AllImagesViewerModule {}
