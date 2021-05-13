import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule }
	from '../delete-library-button_module/delete-library-button.module';
import { LibraryImagesListModule } from './library-images-list_module/library-images-list.module';
import { LibraryViewerComponent } from './library-viewer.component';
import { LibraryViewerServicesModule } from './library-viewer-services.module';
import { LibraryChangeControlsModule }
	from './library-change-controls_module/library-change-controls.module';
import { NgModule } from '@angular/core';
import { ShowImagesIfTheyExistModule }
	from '@modules/show-images-if-they-exist_module/show-images-if-they-exist.module';


@NgModule({
	declarations: [LibraryViewerComponent],
	imports: [
		CommonModule,
		DeleteLibraryButtonModule,
		LibraryImagesListModule,
		LibraryViewerServicesModule,
		LibraryChangeControlsModule,
		ShowImagesIfTheyExistModule,
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
