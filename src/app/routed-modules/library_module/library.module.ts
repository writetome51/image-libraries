import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule }
	from './delete-library-button_module/delete-library-button.module';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from './library-viewer_module/library-viewer.module';
import { LibraryServicesModule } from './library-services.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		GlobalActionMenuModule,
		LibraryViewerModule,
		DeleteLibraryButtonModule,
		LibraryServicesModule,
		LibraryRoutingModule,
	]
})
export class LibraryModule {}
