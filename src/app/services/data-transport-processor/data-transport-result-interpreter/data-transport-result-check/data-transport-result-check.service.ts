import { AlertService as alert } from '../../../alert.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class DataTransportResultCheckService {


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


	// Bland, default error handler.  Intended to be extended by subclasses.

	protected _errorHandler(errMessage) {
		alert.error = errMessage;
	}


}
