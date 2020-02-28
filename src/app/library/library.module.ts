import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageListComponent } from './library-viewer/image-list/image-list.component';
import { ImageSizeSliderComponent }
	from './library-viewer/image-size-slider/image-size-slider.component';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { LibraryComponent } from './library.component';
import { LibraryViewerComponent } from './library-viewer/library-viewer.component';
import { LibraryRoutingModule } from './library-routing.module';
import { NgModule } from '@angular/core';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';
import { ReArrangeableGridListModule }
	from './library-viewer/image-list/re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { SaveChangesButtonComponent } from './library-viewer/save-changes-button.component';
import { UndoChangesButtonComponent } from './library-viewer/undo-changes-button.component';
import { ThumbnailImageModule } from '../thumbnail-image/thumbnail-image.module';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';


@NgModule({
	declarations: [
		LibraryComponent,
		LibraryViewerComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		ProcessingButtonModule,
		ReArrangeableGridListModule,
		LibraryRoutingModule,
		ImageViewerModule,
		ThumbnailImageModule
	]
})
export class LibraryModule {
}
