import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrariesListComponent } from '@app/libraries/libraries-list/libraries-list.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { RouterModule } from '@angular/router';
import { SearchLibraryNamesComponent } from './search-library-names/search-library-names.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [LibrariesListComponent, SearchLibraryNamesComponent],
	imports: [
		FormsModule,
		CommonModule,
		BigLoadingSpinnerModule,
		RouterModule
	],
	exports: [LibrariesListComponent]
})
export class LibrariesListModule {
}
