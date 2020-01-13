import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { LibraryNameService as libraryName } from '../services/library/library-name.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		return libraryName.data;
	}


	get libraryLoaded() {
		return hasValue(this.__currentLibrary.data);
	}


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


}
