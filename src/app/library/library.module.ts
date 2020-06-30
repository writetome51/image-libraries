import { AppPaginationControlsModule }
	from '../app-pagination-controls/app-pagination-controls.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageListComponent } from './library-viewer/image-list/image-list.component';
import { ImageSizeSliderComponent }
	from './library-viewer/image-size-slider/image-size-slider.component';
import { LibraryComponent } from './library.component';
import { LibraryViewerComponent } from './library-viewer/library-viewer.component';
import { LibraryRoutingModule } from './library-routing.module';
import { NgModule } from '@angular/core';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { ReArrangeableGridListModule }
	from './library-viewer/image-list/re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { SaveChangesButtonComponent } from './library-viewer/save-changes-button.component';
import { UndoChangesButtonComponent } from './library-viewer/undo-changes-button.component';
import { AppThumbnailImageModule } from '../app-thumbnail-image/app-thumbnail-image.module';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { DeleteLibraryButtonComponent } from './delete-library-button.component';
import { LibraryPaginationControlsComponent } from './library-pagination-controls.component';
import { AppActionMenuModule } from '../app-action-menu/app-action-menu.module';


@NgModule({
	declarations: [
		LibraryComponent,
		LibraryViewerComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent,
		DeleteLibraryButtonComponent,
		LibraryPaginationControlsComponent
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
		AppThumbnailImageModule,
	]
})
export class LibraryModule {
}
