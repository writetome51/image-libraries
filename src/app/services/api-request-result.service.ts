import { AlertService } from './alert.service';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class APIRequestResultService {


	constructor(protected _alert: AlertService) {
	}


	ifResultSuccessful_processResult(
		result,
		process: (result) => void
	): void {
		result = this.checkForError_returnIfOK(result);
		if (hasValue(result)) process(result);
	}


	checkForError_returnIfOK(result): void | any {
		if (typeof result === 'string') result = getObjectFromJSON(result);

		if (result.error) {
			if (result.error.message) this._errorHandler(result.error.message);
			else {
				// This is for displaying unexpected errors.
				this._alert.error = result.error;
			}
			return;
		}
		else return result;
	}


	// Bland, default error handler.  Intended to be extended by subclasses.

	protected _errorHandler(errMessage) {
		this._alert.error = errMessage;
	}


}
