import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteImageButtonComponent }
	from './image-list/thumbnail-image/delete-image-button/delete-image-button.component';
import { FullSizeImageComponent } from '../image-viewer/full-size-image/full-size-image.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageSizeSliderComponent } from './image-size-slider/image-size-slider.component';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { LibraryComponent } from './library.component';
import { SaveChangesComponent } from './save-changes/save-changes.component';
import { ReArrangeableGridListModule }
	from '../../reusable-modules/re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { ThumbnailImageComponent } from './image-list/thumbnail-image/thumbnail-image.component';


@NgModule({
	declarations: [
		DeleteImageButtonComponent,
		LibraryComponent,
		FullSizeImageComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		ImageViewerComponent,
		SaveChangesComponent,
		ThumbnailImageComponent
	],
	imports: [
		CommonModule,
		ReArrangeableGridListModule
	],
	exports: [
		DeleteImageButtonComponent,
		LibraryComponent,
		FullSizeImageComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		ImageViewerComponent,
		SaveChangesComponent,
		ThumbnailImageComponent
	]
})
export class LibraryModule {
}
