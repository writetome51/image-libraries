import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { CommonModule } from '@angular/common';
import { LibraryNamesModule } from './library-names_module/library-names.module';
import { LibrariesViewerComponent } from './libraries-viewer.component';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [
		LibrariesViewerComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		ClearFormOnInitModule,
		LibraryNamesModule,
		NewLibraryFormModule
	],
	exports: [LibrariesViewerComponent]
})
export class LibrariesViewerModule {}
