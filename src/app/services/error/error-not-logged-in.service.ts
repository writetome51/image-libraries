import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { notLoggedIn } from '../../../constants/form-submission-errors';
import { RemoveSessionIDAndRedirectHomeService } from '../remove-session-id-and-redirect-home.service';
import { LocalSessionIDService } from '../authentication/local-session-id.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorNotLoggedInService {


	handler: () => Promise<void>;


	constructor(
		private __sessionIDLocalStorage: LocalSessionIDService,
		private __alert: AlertService,
		private __remove_sessionID_and_redirectHome: RemoveSessionIDAndRedirectHomeService
	) {
		this.handler = async () => {
			// Use this handler when we've received an api error saying we're not
			// logged in, but the browser is still storing the sessionID.

			if (this.__sessionIDLocalStorage.get()) {
				await this.__remove_sessionID_and_redirectHome.go();
				this.__alert.error = notLoggedIn;
			}
		};
	}


}
