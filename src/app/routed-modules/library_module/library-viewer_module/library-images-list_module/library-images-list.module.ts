import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryImagesListComponent } from './library-images-list.component';
import { ReArrangeableGridListModule }
	from './re-arrangeable-grid-list_module/re-arrangeable-grid-list.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container_module/thumbnail-image-container.module';
import { ListItemRemoverService } from './list-item-remover.service';


@NgModule({
	declarations: [LibraryImagesListComponent],
	imports: [
		CommonModule,
		ThumbnailImageContainerModule,
		ReArrangeableGridListModule,
	],
	providers: [ListItemRemoverService],
	exports: [LibraryImagesListComponent]
})
export class LibraryImagesListModule {}
