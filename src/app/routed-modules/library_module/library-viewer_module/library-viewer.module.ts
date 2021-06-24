import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule }
	from './delete-library-button_module/delete-library-button.module';
import { ImagesViewerModule } from '@images-viewer_module/images-viewer.module';
import { LibraryImagesListModule } from './library-images-list_module/library-images-list.module';
import { LibraryViewerComponent } from './library-viewer.component';
import { LibraryViewerServicesModule } from './library-viewer-services.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryViewerComponent],
	imports: [
		CommonModule,
		DeleteLibraryButtonModule,
		LibraryImagesListModule,
		LibraryViewerServicesModule,
		ImagesViewerModule,
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
