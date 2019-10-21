import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class RestAPIRequestResultService {


	protected _errorHandler: (errorMessage: string) => void;


	constructor(protected _alert: AlertService) {
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
				if (noValue(this._errorHandler)) {
					this._alert.error = result.error.message;
				} else {
					this._errorHandler(result.error.message);
				}

			} else {
				// This is for displaying unexpected errors.
				this._alert.error = result.error;
			}
			return;
		} else {
			return result;
		}
	}


}
