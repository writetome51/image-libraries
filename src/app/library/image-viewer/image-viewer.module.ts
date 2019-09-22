import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageNameComponent } from './image-name/image-name.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { ImageTagsComponent } from './image-tags/image-tags.component';
import { ImageDateComponent } from './image-date/image-date.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { FullSizeImageComponent } from './full-size-image/full-size-image.component';


@NgModule({
	declarations: [
		FullSizeImageComponent,
		ImageViewerComponent,
		ImageNameComponent,
		ImageDescriptionComponent,
		ImageTagsComponent,
		ImageDateComponent,
		ImageLocationComponent
	],
	imports: [
		CommonModule
	]
})
export class ImageViewerModule {
}
