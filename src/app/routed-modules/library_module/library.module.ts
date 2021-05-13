import { CommonModule } from '@angular/common';
import { ImagesLoaderModule } from '@modules/images-loader_module/images-loader.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from './library-viewer_module/library-viewer.module';
import { LibraryServicesModule } from './library-services.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		ImagesLoaderModule,
		LibraryViewerModule,
		LibraryServicesModule,
		LibraryRoutingModule,
	]
})
export class LibraryModule {}
