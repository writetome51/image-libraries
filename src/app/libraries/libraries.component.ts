import { AppLibrary } from '../../interfaces/app-library';
import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {

	noLibrariesMessage = 'You have no libraries right now';


	constructor(
		public alert: AlertService,
		private __currentUserLibraries: CurrentUserLibrariesService
	) {
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


}
