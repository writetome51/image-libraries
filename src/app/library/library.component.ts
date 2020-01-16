import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { RequestedLibraryService as requestedLibrary }
	from '../services/library/requested-library.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		return requestedLibrary.name;
	}


	get libraryLoaded() {
		return hasValue(this.__currentLibrary.data);
	}


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


}
