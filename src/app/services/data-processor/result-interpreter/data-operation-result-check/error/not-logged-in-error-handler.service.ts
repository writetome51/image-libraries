import { AlertService as alert } from '../../../../alert.service';
import { Injectable } from '@angular/core';
import { notLoggedIn } from '../../../../../string-constants/form-submission-errors';
import { RemoveLocalDataAndRedirectHomeService }
	from '../../../../remove-local-data-and-redirect-home.service';
import { LocalSessionIDService } from '../../../../local-data/local-session-id.service';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({providedIn: 'root'})

// Use this handler when we've received an api error saying we're not
// logged in, but the browser is still storing the sessionID.

export class NotLoggedInErrorHandlerService extends ErrorHandlerService {


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __remove_localData_and_redirectHome: RemoveLocalDataAndRedirectHomeService
	) {
		super();
	}


	async handle() {

		if (this.__localSessionID.get()) {
			await this.__remove_localData_and_redirectHome.go();
			alert.error = notLoggedIn;
		}
	}

}
