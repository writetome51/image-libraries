import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { LibraryData as library } from '../data/runtime-state-data/library.data';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>
		<library-viewer *ngIf="libraryLoaded"></library-viewer>
	`
})
export class LibraryComponent extends ClearAlertOnDestroyComponent {

	get name() {
		return requestedLibrary.name;
	}


	get libraryLoaded() {
		return hasValue(library.data);
	}

}
