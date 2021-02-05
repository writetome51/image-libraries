import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrariesListComponent } from '@app/libraries/libraries-list/libraries-list.component';
import { SearchModule } from '@search/search.module';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [LibrariesListComponent],
	imports: [
		CommonModule,
		SearchModule,
		BigLoadingSpinnerModule,
		RouterModule
	],
	exports: [LibrariesListComponent]
})
export class LibrariesListModule {
}
