import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { noRecordMatchedCriteria, notLoggedIn } from '@string-constants/rest-api-errors';
import { HandleNotLoggedInErrorService }
	from './error-handler/handle-not-logged-in-error.service';
import { HandleNoRecordMatchErrorService }
	from './error-handler/handle-no-record-match-error.service';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})
export class HandleDataTransportProcessErrorService implements IDoThis {

	constructor(
		private __handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		protected _handleNotLoggedInError: HandleNotLoggedInErrorService,
	) {
	}


	// Default error handler.  Intended to be extended by subclasses.

	async go(error) {
		// We expect `error` to have 'message':
		if (error.message) {
			if (error.message.includes(noRecordMatchedCriteria)) {
				await this.__handleNoRecordMatchError.go();
			}
			else if (error.message.includes(notLoggedIn)) {
				await this._handleNotLoggedInError.go();
			}
			else alert.error = error.message;
		}
		else {  // This is for displaying unexpected errors.
			alert.error = error.toString();
		}
	}

}
