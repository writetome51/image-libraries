import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrariesListComponent } from './libraries-list.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { RouterModule } from '@angular/router';
import { SearchLibraryNamesComponent }
	from './search-library-names_component/search-library-names.component';
import { FormsModule } from '@angular/forms';
import { LibrariesListServicesModule } from './libraries-list-services.module';


@NgModule({
	declarations: [LibrariesListComponent, SearchLibraryNamesComponent],
	imports: [
		FormsModule,
		CommonModule,
		BigLoadingSpinnerModule,
		LibrariesListServicesModule,
		RouterModule
	],
	exports: [LibrariesListComponent]
})
export class LibrariesListModule {}
