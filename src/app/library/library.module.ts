import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { AppPaginationControlsModule } from '@app-pagination-controls/app-pagination-controls.module';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonComponent } from './delete-library-button/delete-library-button.component';
import { FormsModule } from '@angular/forms';
import { ImageListComponent } from './library-viewer/image-list/image-list.component';
import { ImageSizeSliderComponent }
	from './library-viewer/image-size-slider/image-size-slider.component';
import { LibraryComponent } from './library.component';
import { LibraryPaginationControlsComponent }
	from './library-pagination-controls/library-pagination-controls.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerComponent } from './library-viewer/library-viewer.component';
import { NgModule } from '@angular/core';
import { ReArrangeableGridListModule }
	from './library-viewer/image-list/re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { SaveChangesButtonComponent }
	from './library-viewer/save-changes-button.component';
import { StartFunctionExecutionButtonModule }
	from 'start-function-execution-button/start-function-execution-button.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container/thumbnail-image-container.module';
import { UndoChangesButtonComponent } from './library-viewer/undo-changes-button.component';


@NgModule({
	declarations: [
		DeleteLibraryButtonComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		LibraryComponent,
		LibraryPaginationControlsComponent,
		LibraryViewerComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		GlobalActionMenuModule,
		StartFunctionExecutionButtonModule,
		AppPaginationControlsModule,
		ReArrangeableGridListModule,
		LibraryRoutingModule,
		ThumbnailImageContainerModule,
	]
})
export class LibraryModule {
}
