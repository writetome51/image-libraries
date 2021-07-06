import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryNamesModule } from './library-names_module/library-names.module';
import { LibrariesViewerComponent } from './libraries-viewer.component';
import { LibrariesViewerServicesModule } from './libraries-viewer-services.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';
import { SearchLibraryNamesComponent }
	from './search-library-names_component/search-library-names.component';


@NgModule({
	declarations: [
		LibrariesViewerComponent,
		SearchLibraryNamesComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ClearFormOnInitModule,
		LibrariesViewerServicesModule,
		LibraryNamesModule,
		NewLibraryFormModule
	],
	exports: [LibrariesViewerComponent]
})
export class LibrariesViewerModule {}
