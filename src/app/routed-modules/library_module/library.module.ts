import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from './library-viewer_module/library-viewer.module';
import { LibraryServicesModule } from './library-services.module';
import { NgModule } from '@angular/core';
import { ImagesLoaderModule }
	from '@modules/images-loader_module/images-loader.module';


@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		ImagesLoaderModule,
		BigLoadingSpinnerModule,
		GlobalActionMenuModule,
		LibraryViewerModule,
		LibraryServicesModule,
		LibraryRoutingModule,
	]
})
export class LibraryModule {}
