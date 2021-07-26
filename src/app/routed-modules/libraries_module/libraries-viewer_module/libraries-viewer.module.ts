import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module'
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
		ResetToDefaultOnInitModule,
		SearchLibraryNamesModule,
		RouterModule
	],
	exports: [LibrariesViewerComponent]
})
export class LibrariesViewerModule {}
