import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { AssureUserImagesTotalIsStoredLocallyService }
	from '@services/assure-user-images-total-is-stored-locally.service';


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
		private __assureUserImagesTotalIsStoredLocally: AssureUserImagesTotalIsStoredLocallyService
	) {
		this.__assureUserImagesTotalIsStoredLocally.go();
	}


}
