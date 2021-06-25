import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryImagesListComponent } from './library-images-list.component';
import { ReArrangeableGridListModule }
	from './re-arrangeable-grid-list_module/re-arrangeable-grid-list.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';
import { AppUnsubscribeOnDestroyModule } from '@app/shared/modules/app-unsubscribe-on-destroy_module/app-unsubscribe-on-destroy.module';


@NgModule({
	declarations: [LibraryImagesListComponent],
	imports: [
		CommonModule,
		ThumbnailImageContainerModule,
		ReArrangeableGridListModule,
		AppUnsubscribeOnDestroyModule
	],
	exports: [LibraryImagesListComponent]
})
export class LibraryImagesListModule {}
