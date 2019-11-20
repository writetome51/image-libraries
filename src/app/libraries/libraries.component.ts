import { AppLibrary } from '../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertAndFormOnInitComponent {


	noLibrariesMessage = 'You have no libraries right now';


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
		super();
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


}
