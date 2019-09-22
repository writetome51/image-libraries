import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { SuccessOrErrorMessageService } from '../../success-or-error-message/success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultService {

	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	interpret(result) {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}

		if (result.sessionID) {
			this.__sessionIDLocalStorage.set(result.sessionID);
			this.__successOrErrorMessage.success = 'User created!';
		}
		else this.__successOrErrorMessage.error = result.error.message;
	}


}
