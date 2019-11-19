import { Component } from '@angular/core';
import { CurrentLibraryService } from '../services/library/current-library.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {

	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	get name() {
		return this.__currentLibrary.libName;
	}


}
