import { AppUnsubscribeOnDestroyModule }
	from '@app-unsubscribe-on-destroy_module/app-unsubscribe-on-destroy.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryImagesListComponent } from './library-images-list.component';
import { ReArrangeableGridListItemModule }
	from './re-arrangeable-grid-list-item_module/re-arrangeable-grid-list-item.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';
import { LibraryImagesListServicesModule } from './library-images-list-services.module';


@NgModule({
	declarations: [LibraryImagesListComponent],
	imports: [
		CommonModule,
		ThumbnailImageContainerModule,
		ReArrangeableGridListItemModule,
		AppUnsubscribeOnDestroyModule,
		LibraryImagesListServicesModule
	],
	exports: [LibraryImagesListComponent]
})
export class LibraryImagesListModule {}
