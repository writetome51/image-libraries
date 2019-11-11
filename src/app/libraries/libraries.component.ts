import { AppLibrary } from '../../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { AlertService } from '../services/alert.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertAndFormOnInitComponent {

	noLibrariesMessage = 'You have no libraries right now';


	constructor(
		public alert: AlertService,
		__currentUser: CurrentUserService,
		private __currentUserLibraries: CurrentUserLibrariesService
	) {
		super(alert, __currentUser);
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


}
