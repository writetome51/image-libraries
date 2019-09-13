import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';
import { SuccessOrErrorMessageService } from '../success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationResultService {


	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,) {
	}


	// When login is successful, the db updates these attributes in the user's document:
	// 'loggedIn' = true, 'lastLoggedIn' = date/time of the login, and 'sessionID' = new ObjectId
	// converted to a string.  When this is finished, the updated document is sent back to us, we
	// encrypt its 'sessionID', and save it in the browser.  While the user is logged in, he can't
	// make any successful requests to the API without that sessionID.
	// If the sessionID is deleted from the browser, he is forced to log in again.


	interpretLogin(result): void {
		// If login successful, 'result' will be a JSON string
		if (typeof result === 'string') result = getObjectFromJSON(result);

		// If still successful, 'result' will have 'sessionID', which is saved in browser
		if (result.sessionID) this.__sessionIDLocalStorage.set(result.sessionID);
		else this.__successOrErrorMessage.error = result.error.message;
	}


	interpretLogout(result): void {
		// If logout successful, 'result' will be a JSON string
		if (typeof result === 'string') result = getObjectFromJSON(result);
		if (result.success) {
			this.__sessionIDLocalStorage.remove();
		}
		else this.__successOrErrorMessage.error = result.error.message;
	}


}
