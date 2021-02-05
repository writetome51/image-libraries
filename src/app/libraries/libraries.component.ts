import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { AssureUserImageTotalIsStoredLocallyService }
	from '@services/assure-user-image-total-is-stored-locally.service';


@Component({
	selector: 'app-libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {

	heading = 'Your Libraries';


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


	constructor(
		private __assureUserImageTotalIsStoredLocally: AssureUserImageTotalIsStoredLocallyService
	) {
		// As long as this component loads when user logs in, this should execute here:
		this.__assureUserImageTotalIsStoredLocally.go();
	}

}
