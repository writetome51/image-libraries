import { DataRequestResultService } from '../data-request-result.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { DBUser } from '../../../interfaces/db-user';
import { LogoutResultProcessorService } from '../user/logout-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationResultService {


	constructor(
		private __logoutResultProcessor: LogoutResultProcessorService,
		private __dataRequestResult: DataRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	// When login is successful, the db updates these attributes in the user's document:
	// 'loggedIn' = true, 'lastLoggedIn' = date/time of the login, and 'sessionID' = new ObjectId
	// converted to a string.  When this is finished, the updated document is sent back to us, we
	// encrypt its 'sessionID', and save it in the browser.  While the user is logged in, he can't
	// make any successful requests to the API without that sessionID.
	// If the sessionID is deleted from the browser, he is forced to log in again.


	interpretLogin(result: DBUser): void {
		this.__ifResultSuccessful_processResult(
			result,
			this.__userResultProcessor.process
		);
	}


	interpretLogout(result): void {
		this.__ifResultSuccessful_processResult(
			result,
			this.__logoutResultProcessor.process
		);
	}


	private __ifResultSuccessful_processResult(result, process: Function) {
		result = this.__dataRequestResult.checkForError_returnIfOK(result);
		if (hasValue(result)) process(result);
	}


}
