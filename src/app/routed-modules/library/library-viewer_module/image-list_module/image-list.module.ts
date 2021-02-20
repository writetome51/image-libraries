import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from '@app/routed-modules/library/library-viewer_module/image-list_module/image-list.component';
import { ReArrangeableGridListModule }
	from './re-arrangeable-grid-list_module/re-arrangeable-grid-list.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container/thumbnail-image-container.module';


@NgModule({
	declarations: [ImageListComponent],
	imports: [
		CommonModule,
		ThumbnailImageContainerModule,
		ReArrangeableGridListModule,
	],
	exports: [ImageListComponent]
})
export class ImageListModule {}
