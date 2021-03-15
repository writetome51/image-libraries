import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';
import { FormsModule } from '@angular/forms';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { LibraryImagesListModule } from './library-images-list_module/library-images-list.module';
import { LibraryPaginationControlsComponent } from './library-pagination-controls.component';
import { LibraryViewerComponent } from './library-viewer.component';
import { LibraryViewerServicesModule } from './library-viewer-services.module';
import { NgModule } from '@angular/core';
import { DeleteLibraryButtonModule }
	from '../delete-library-button_module/delete-library-button.module';
import { ImagesListContainerModule }
	from '@modules/images-list-container_module/images-list-container.module';
import { LibraryChangeControlsModule }
	from './library-change-controls_module/library-change-controls.module';


@NgModule({
	declarations: [
		LibraryViewerComponent,
		LibraryPaginationControlsComponent
	],
	imports: [
		AppPaginationControlsModule,
		CommonModule,
		DeleteLibraryButtonModule,
		ExecuteFunctionButtonModule,
		FormsModule,
		ImageSizeSliderModule,
		LibraryImagesListModule,
		LibraryViewerServicesModule,
		LibraryChangeControlsModule,
		ImagesListContainerModule
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
