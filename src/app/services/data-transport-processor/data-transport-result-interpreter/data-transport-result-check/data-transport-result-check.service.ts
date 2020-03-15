import { AlertService as alert } from '../../../alert.service';
import { Injectable } from '@angular/core';
import { noDocumentMatchedCriteria, notLoggedIn }
	from '../../../../string-constants/rest-api-errors';
import { NotLoggedInErrorHandlerService } from './error/not-logged-in-error-handler.service';
import { NoRecordMatchErrorHandlerService } from './error/no-record-match-error-handler.service';


@Injectable({providedIn: 'root'})

export class DataTransportResultCheckService {

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
		if (errMessage.includes(noDocumentMatchedCriteria)) {

			await this.__noRecordMatchErrorHandler.handle();
		}
		else if (errMessage.includes(notLoggedIn)) await this._notLoggedInErrorHandler.handle();

		else alert.error = errMessage;
	}


}
