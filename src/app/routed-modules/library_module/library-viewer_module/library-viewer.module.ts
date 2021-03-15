import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';
import { FormsModule } from '@angular/forms';
import { ImageListModule } from './image-list_module/image-list.module';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { LibraryPaginationControlsComponent } from './library-pagination-controls.component';
import { LibraryViewerComponent } from './library-viewer.component';
import { LibraryViewerServicesModule } from './library-viewer-services.module';
import { NgModule } from '@angular/core';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { UndoChangesButtonComponent } from './undo-changes-button.component';


@NgModule({
	declarations: [
		LibraryViewerComponent,
		LibraryPaginationControlsComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ImageListModule,
		ImageSizeSliderModule,
		AppPaginationControlsModule,
		ExecuteFunctionButtonModule,
		LibraryViewerServicesModule
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
