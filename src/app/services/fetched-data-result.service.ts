import { Injectable } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';
import { Router } from '@angular/router';
import { SuccessOrErrorMessageService } from '../success-or-error-message/success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class FetchedDataResultService {

	constructor(
		private __router: Router,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	checkForError_returnIfOK(result): void | any {
		if (typeof result === 'string') result = getObjectFromJSON(result);

		if (result.error) {
			if (result.error.message) {
				this.__router.navigate(['/']); // logged-out home page.
				this.__successOrErrorMessage.error = 'You\'re not logged in.';
			}
			else this.__successOrErrorMessage.error = result.error;

			return;
		}

		else return result;
	}
}
