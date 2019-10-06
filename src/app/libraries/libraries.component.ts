import { AppLibrary } from '../../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { SuccessOrErrorMessageService } from '../success-or-error-message/success-or-error-message.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {

	noLibrariesMessage = 'You have no libraries right now';


	constructor(
		private __currentUserLibraries: CurrentUserLibrariesService,
		public successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


}
