import { AddImagesComponent } from './library-viewer/add-images/add-images.component';
import { AddImageUrlButtonComponent }
	from './library-viewer/add-images/enter-image-url/add-image-url-button.component';
import { ChooseImagesFromDeviceComponent }
	from './library-viewer/add-images/choose-images-from-device/choose-images-from-device.component';
import { CommonModule } from '@angular/common';
import { EnterImageURLComponent }
	from './library-viewer/add-images/enter-image-url/enter-image-url.component';
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


@NgModule({
	declarations: [
		AddImagesComponent,
		AddImageUrlButtonComponent,
		ChooseImagesFromDeviceComponent,
		EnterImageURLComponent,
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
		ProcessingButtonModule,
		ReArrangeableGridListModule,
		LibraryRoutingModule,
		ImageViewerModule,
		ThumbnailImageModule
	]
})
export class LibraryModule {
}
