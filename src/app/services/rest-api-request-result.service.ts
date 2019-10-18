import { Injectable } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from '@writetome51/has-value-no-value';
import { Router } from '@angular/router';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class RestAPIRequestResultService {

	constructor(
		private __router: Router,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	ifResultSuccessful_processResult(
		result,
		process: (result) => void
	): void {
		result = this.checkForError_returnIfOK(result);
		if (hasValue(result)) {
			process(result);
		}
	}


	checkForError_returnIfOK(result): void | any {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}

		if (result.error) {
			if (result.error.message) {
				if (result.error.message.includes(
					`Duplicate key error: E11000 duplicate key error collection: rest-api.image-library-app-user index: email_1`
				)) {
					this.__successOrErrorMessage.error = 'An account with that email already exists.';
					return;
				}
				if (result.error.message.includes('Operation not performed.  No document matched the request criteria'))

				this.__successOrErrorMessage.error = result.error.message;
			} else {
				this.__successOrErrorMessage.error = result.error;
			}

			return;
		} else {
			return result;
		}
	}


}
