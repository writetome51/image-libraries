import { AppActionMenuModule } from '../shared/modules/app-action-menu/app-action-menu.module';
import { AppPaginationControlsModule }
	from '../shared/modules/app-pagination-controls/app-pagination-controls.module';
import { BigLoadingSpinnerModule }
	from '../shared/modules/big-loading-spinner/big-loading-spinner.module';
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
	from './library-viewer/save-changes-button/save-changes-button.component';
import { StartDataProcessButtonModule }
	from '../shared/modules/start-data-process-button/start-data-process-button.module';
import { ThumbnailImageContainerModule }
	from '../shared/modules/thumbnail-image-container/thumbnail-image-container.module';
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
		AppActionMenuModule,
		StartDataProcessButtonModule,
		AppPaginationControlsModule,
		ReArrangeableGridListModule,
		LibraryRoutingModule,
		ThumbnailImageContainerModule,
	]
})
export class LibraryModule {
}
