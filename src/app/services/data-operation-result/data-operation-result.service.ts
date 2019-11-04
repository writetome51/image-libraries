import { AlertService } from '../alert.service';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class DataOperationResultService {


	constructor(protected _alert: AlertService) {
	}


	async ifSuccessful_processResult(
		result,
		process: (result) => void
	): Promise<void> {
		result = await this.checkForError_returnIfOK(result);
		if (hasValue(result)) process(result);
	}


	async checkForError_returnIfOK(result): Promise<void | any> {

		if (result.error) {
			if (result.error.message) await this._errorHandler(result.error.message);
			else {
				// This is for displaying unexpected errors.
				this._alert.error = result.error.toString();
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
