import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule }
	from '../delete-library-button_module/delete-library-button.module';
import { ImagesListContainerModule }
	from '@modules/images-list-container_module/images-list-container.module';
import { LibraryImagesListModule } from './library-images-list_module/library-images-list.module';
import { LibraryViewerComponent } from './library-viewer.component';
import { LibraryViewerServicesModule } from './library-viewer-services.module';
import { LibraryChangeControlsModule }
	from './library-change-controls_module/library-change-controls.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryViewerComponent],
	imports: [
		CommonModule,
		DeleteLibraryButtonModule,
		ImagesListContainerModule,
		LibraryImagesListModule,
		LibraryViewerServicesModule,
		LibraryChangeControlsModule,
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
