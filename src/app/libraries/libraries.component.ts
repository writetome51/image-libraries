import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';


@Component({
	selector: 'app-libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {

	heading = 'Your Libraries';


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}

}
