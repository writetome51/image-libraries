import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { AlertService } from '../alert.service';
import { notLoggedIn } from '../../../constants/form-submission-errors';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class ErrorNotLoggedInService {


	handler: () => Promise<void>;


	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __alert: AlertService,
		private __router: Router
	) {
		this.handler = async () => {
			// Use this handler when we've received an api error saying we're not
			// logged in, but the browser is still storing the sessionID.

			if (this.__sessionIDLocalStorage.get()) {
				this.__sessionIDLocalStorage.remove();
				await this.__router.navigate(['/']); // logged-out homepage.
				this.__alert.error = notLoggedIn;
			}
		};
	}


}
