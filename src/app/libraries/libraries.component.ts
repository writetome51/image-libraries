import { AppLibrary } from '../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';
import { noValue } from '@writetome51/has-value-no-value';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {


	noLibrariesMessage = 'You have no libraries right now';


	get creatingNewLibrary() {
		return creatingNewLibrary.status;
	}


	set creatingNewLibrary(value) {
		creatingNewLibrary.status = value;
	}


	get buttonText() {
		return (this.creatingNewLibrary ? 'Cancel' : 'Create New Library');
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
		if (noValue(this.__currentUserLibraries.data)) {
			this.__currentUserLibraries.set_data();
		}
	}


}
