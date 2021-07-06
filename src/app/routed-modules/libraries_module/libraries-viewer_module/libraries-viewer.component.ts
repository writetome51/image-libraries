import { Component } from '@angular/core';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { NewLibraryData } from '@runtime-state-data/new-library.data';
import { SearchedLibraryNamesData } from './searched-library-names.data';


@Component({
	selector: 'libraries-viewer',
	template: `
		<p *ngIf="!(librariesExist)">{{noLibrariesMessage}}</p>

		<search-library-names *ngIf="librariesExist" clearFormOnInit></search-library-names>

		<library-links [labels]="names"></library-links>

		<new-library-button></new-library-button>

		<new-library-form *ngIf="newLibrary.beingCreated" clearFormOnInit></new-library-form>
	`
})
export class LibrariesViewerComponent {

	newLibrary = NewLibraryData;
	libraryNames = LibraryNamesData;
	searchedLibraryNames = SearchedLibraryNamesData;
	noLibrariesMessage = 'You have no libraries right now';

	get librariesExist() {
		return (this.libraryNames.data.length);
	}

	get names() {
		return this.searchedLibraryNames.data ? this.searchedLibraryNames.data
			: this.libraryNames.data;
	}

}
