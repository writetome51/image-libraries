import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationResultService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,) {
	}


	interpretLogin(result) {
		if (typeof result === 'string') result = JSON.parse(result);

		if (result.sessionID) this.__sessionIDLocalStorage.set(result.sessionID);
		else this.__successOrErrorMessage.error = result.error.message;
	}


	interpretLogout(result) {
		if (typeof result === 'string' && JSON.parse(result).success) {
			this.__sessionIDLocalStorage.remove();
		}
		else {
			if (typeof result === 'string') result = JSON.parse(result);
			this.__successOrErrorMessage.error = result.error.message;
		}
	}


}
