import { Injectable } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from '@writetome51/has-value-no-value';
import { Router } from '@angular/router';
import { SuccessOrErrorMessageService }
	from '../success-or-error-message/success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class HttpRequestResultService {

	constructor(
		private __router: Router,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	ifResultSuccessful_processResult(result, process: Function) {
		result = this.checkForError_returnIfOK(result);
		if (hasValue(result)) process(result);
	}


	checkForError_returnIfOK(result): void | any {
		if (typeof result === 'string') result = getObjectFromJSON(result);

		if (result.error) {
			if (result.error.message) {
				this.__router.navigate(['/']); // logged-out home page.
				this.__successOrErrorMessage.error = result.error.message;
			}
			else this.__successOrErrorMessage.error = result.error;

			return;
		}

		else return result;
	}


}
