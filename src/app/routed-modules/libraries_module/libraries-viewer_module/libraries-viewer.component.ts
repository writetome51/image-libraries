import { Component } from '@angular/core';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { NewLibraryData } from '@runtime-state-data/new-library.data';
import { not } from '@writetome51/not';
import { SearchedLibraryNamesData } from './searched-library-names.data';


@Component({
	selector: 'libraries-viewer',
	template: `
		<p *ngIf="librariesDontExist">You have no libraries</p>

		<ng-container *ngIf="librariesExist">
			<search-library-names clearFormOnInit></search-library-names>

			<library-links [labels]="names"></library-links>
		</ng-container>
	`
})
export class LibrariesViewerComponent {

	libraryNames = LibraryNamesData;
	searchedLibraryNames = SearchedLibraryNamesData;

	get librariesExist() {
		return (this.libraryNames.data && this.libraryNames.data.length);
	}

	get librariesDontExist() {
		return (this.libraryNames.data && not(this.libraryNames.data.length));
	}

	get names(): string[] {
		return this.searchedLibraryNames.data ? this.searchedLibraryNames.data
			: this.libraryNames.data;
	}

}
