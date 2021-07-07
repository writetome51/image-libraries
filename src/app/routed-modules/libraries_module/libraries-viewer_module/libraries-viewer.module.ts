import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module'
import { CommonModule } from '@angular/common';
import { LibraryLinksComponent } from './library-links.component';
import { LibrariesViewerComponent } from './libraries-viewer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchLibraryNamesModule }
	from './search-library-names_module/search-library-names.module';


@NgModule({
	declarations: [LibrariesViewerComponent, LibraryLinksComponent],
	imports: [
		CommonModule,
		ClearFormOnInitModule,
		SearchLibraryNamesModule,
		RouterModule
	],
	exports: [LibrariesViewerComponent]
})
export class LibrariesViewerModule {}
