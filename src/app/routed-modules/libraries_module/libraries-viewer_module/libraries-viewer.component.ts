import { Component } from '@angular/core';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryNameSearchResultsData } from './library-name-search-results.data';
import { not } from '@writetome51/not';


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
	libNameSearchResults = LibraryNameSearchResultsData;

	get librariesExist() {
		return (this.libraryNames.data && this.libraryNames.data.length);
	}

	get librariesDontExist() {
		return (this.libraryNames.data && not(this.libraryNames.data.length));
	}

	get names(): string[] {
		return this.libNameSearchResults.data ? this.libNameSearchResults.data
			: this.libraryNames.data;
	}

}
