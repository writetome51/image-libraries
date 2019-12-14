import { AddImagesComponent } from './add-images/add-images.component';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { CommonModule } from '@angular/common';
import { DeleteImageButtonComponent }
	from './image-list/thumbnail-image/delete-image-button/delete-image-button.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageSizeSliderComponent } from './image-size-slider/image-size-slider.component';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { NgModule } from '@angular/core';
import { ReArrangeableGridListModule }
	from './re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { SaveChangesComponent } from './save-changes/save-changes.component';
import { ThumbnailImageComponent } from './image-list/thumbnail-image/thumbnail-image.component';
import { AddImageUrlButtonComponent } from './add-images/enter-image-url/add-image-url-button.component';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';


@NgModule({
	declarations: [
		AddImagesComponent,
		AddImageUrlButtonComponent,
		ChooseImagesFromDeviceComponent,
		DeleteImageButtonComponent,
		EnterImageURLComponent,
		LibraryComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		SaveChangesComponent,
		ThumbnailImageComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ProcessingButtonModule,
		ReArrangeableGridListModule,
		LibraryRoutingModule,
		ImageViewerModule,
	]
})
export class LibraryModule {
}
