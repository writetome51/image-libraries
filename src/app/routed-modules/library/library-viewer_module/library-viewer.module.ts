import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryViewerComponent } from '@app/routed-modules/library/library-viewer_module/library-viewer.component';
import { LibraryPaginationControlsComponent }
	from './library-pagination-controls_component/library-pagination-controls.component';
import { ImageSizeSliderModule } from '@app/shared/modules/image-size-slider/image-size-slider.module';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { UndoChangesButtonComponent } from './undo-changes-button.component';
import { AppPaginationControlsModule }
	from '@app-pagination-controls/app-pagination-controls.module';
import { FormsModule } from '@angular/forms';
import { ImageListModule } from '@app/routed-modules/library/library-viewer_module/image-list_module/image-list.module';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LibraryViewerServicesModule } from './library-viewer-services.module';


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
