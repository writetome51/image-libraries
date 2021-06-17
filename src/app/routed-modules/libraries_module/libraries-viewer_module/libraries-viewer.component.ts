import { Component } from '@angular/core';
import { NewLibraryData } from '@runtime-state-data/new-library.data';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'libraries-viewer',
	template: `
		<library-names [data]="libraryNames.data"></library-names>

		<new-library-button></new-library-button>

		<new-library-form *ngIf="newLibrary.beingCreated" clearFormOnInit></new-library-form>
	`
})
export class LibrariesViewerComponent {

	newLibrary = NewLibraryData;
	libraryNames = LibraryNamesData;

}
