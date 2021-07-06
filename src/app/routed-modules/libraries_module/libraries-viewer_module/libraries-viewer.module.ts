import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryLinksComponent } from './library-links.component';
import { LibrariesViewerComponent } from './libraries-viewer.component';
import { LibrariesViewerServicesModule } from './libraries-viewer-services.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchLibraryNamesComponent }
	from './search-library-names_component/search-library-names.component';


@NgModule({
	declarations: [
		LibrariesViewerComponent,
		SearchLibraryNamesComponent,
		NewLibraryButtonComponent,
		LibraryLinksComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ClearFormOnInitModule,
		NewLibraryFormModule,
		LibrariesViewerServicesModule,
		RouterModule
	],
	exports: [LibrariesViewerComponent]
})
export class LibrariesViewerModule {}
