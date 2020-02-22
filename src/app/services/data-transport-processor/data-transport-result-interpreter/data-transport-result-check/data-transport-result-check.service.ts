import { AlertService as alert } from '../../../alert.service';
import { Injectable } from '@angular/core';
import { invalidSessionID, notLoggedIn } from '../../../../string-constants/api-errors';
import { NotLoggedInErrorHandlerService } from './error/not-logged-in-error-handler.service';


@Injectable({providedIn: 'root'})

export class DataTransportResultCheckService {

	constructor(protected _notLoggedInErrorHandler: NotLoggedInErrorHandlerService) {
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
		if (errMessage.includes(notLoggedIn) || errMessage.includes(invalidSessionID)) {
			await this._notLoggedInErrorHandler.handle();
		}
		else alert.error = errMessage;
	}


}
