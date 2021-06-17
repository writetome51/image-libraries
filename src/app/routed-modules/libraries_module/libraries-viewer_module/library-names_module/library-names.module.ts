import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryNamesComponent } from './library-names.component';
import { LibraryNamesServicesModule } from './library-names-services.module';
import { LibraryLinksComponent } from './library-links.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchLibraryNamesComponent }
	from './search-library-names_component/search-library-names.component';


@NgModule({
	declarations: [
		LibraryNamesComponent,
		SearchLibraryNamesComponent,
		LibraryLinksComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		LibraryNamesServicesModule,
		RouterModule
	],
	exports: [LibraryNamesComponent]
})
export class LibraryNamesModule {}
