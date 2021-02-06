import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonModule } from './delete-library-button/delete-library-button.module';
import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from '@app/library/library-viewer/library-viewer.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		GlobalActionMenuModule,
		LibraryViewerModule,
		DeleteLibraryButtonModule,
		LibraryRoutingModule,
	]
})
export class LibraryModule {
}
