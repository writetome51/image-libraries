import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryViewerComponent } from '@app/routed-modules/library/library-viewer/library-viewer.component';
import { LibraryPaginationControlsComponent }
	from './library-pagination-controls/library-pagination-controls.component';
import { ImageSizeSliderComponent } from './image-size-slider.component';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { UndoChangesButtonComponent } from './undo-changes-button.component';
import { AppPaginationControlsModule }
	from '@app-pagination-controls/app-pagination-controls.module';
import { FormsModule } from '@angular/forms';
import { ImageListModule } from '@app/routed-modules/library/library-viewer/image-list/image-list.module';
import { ExecuteFunctionButtonModule } from '@execute-function-button/execute-function-button.module';


@NgModule({
	declarations: [
		LibraryViewerComponent,
		LibraryPaginationControlsComponent,
		ImageSizeSliderComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ImageListModule,
		AppPaginationControlsModule,
		ExecuteFunctionButtonModule
	],
	exports: [LibraryViewerComponent]
})
export class LibraryViewerModule {}
