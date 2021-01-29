import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { AssureUserImageTotalIsLoadedService }
	from '@services/assure-user-image-total-is-loaded.service';


@Component({
	selector: 'app-libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {

	heading = 'Your Libraries';


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


	constructor(private __assureUserImageTotalIsLoaded: AssureUserImageTotalIsLoadedService) {
		this.__assureUserImageTotalIsLoaded.go();
	}


}
