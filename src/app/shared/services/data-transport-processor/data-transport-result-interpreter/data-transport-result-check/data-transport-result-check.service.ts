import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { noRecordMatchedCriteria, notLoggedIn } from '@string-constants/rest-api-errors';
import { NotLoggedInErrorHandlerService }
	from './error-handler/not-logged-in-error-handler.service';
import { NoRecordMatchErrorHandlerService }
	from './error-handler/no-record-match-error-handler.service';
import { ResultCheck } from '@interfaces/result-check';


@Injectable({providedIn: 'root'})
export class DataTransportResultCheckService implements ResultCheck {

	constructor(
		private __noRecordMatchErrorHandler: NoRecordMatchErrorHandlerService,
		protected _notLoggedInErrorHandler: NotLoggedInErrorHandlerService,
	) {
	}


	async returnIfNoError(result): Promise<void | any> {

		if (result.error) {
			// We expect result.error to have 'message' property:
			if (result.error.message) await this._errorHandler(result.error.message);
			else {
				// This is for displaying unexpected errors.
				alert.error = result.error.toString();
			}
			return;
		}
		else return result;
	}


	// Default error handler.  Intended to be extended by subclasses.

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(noRecordMatchedCriteria)) {

			await this.__noRecordMatchErrorHandler.handle();
		}
		else if (errMessage.includes(notLoggedIn)) await this._notLoggedInErrorHandler.handle();

		else alert.error = errMessage;
	}


}
