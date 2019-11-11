import { AppLibrary } from '../../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { AlertService as alert } from '../services/alert.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertAndFormOnInitComponent {

	alert = alert;
	noLibrariesMessage = 'You have no libraries right now';


	constructor(
		__currentUser: CurrentUserService,
		private __currentUserLibraries: CurrentUserLibrariesService
	) {
		super(__currentUser);
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


}
