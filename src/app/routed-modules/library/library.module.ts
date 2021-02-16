import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule } from './delete-library-button_module/delete-library-button.module';
import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { LibraryComponent } from './library_component/library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from './library-viewer/library-viewer.module';
import { NgModule } from '@angular/core';
import { LibraryServicesModule } from './library-services.module';


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
export class LibraryModule {
}
