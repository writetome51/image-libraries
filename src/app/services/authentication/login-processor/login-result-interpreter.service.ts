import { OperationRequiringEmailPasswordResultService }
	from '../../operation-requiring-email-password-result.service';
import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../../user/user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService {


	constructor(
		private __loginResult: OperationRequiringEmailPasswordResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	// When login is successful, the db updates these attributes in the user's document:
	// 'loggedIn' = true, 'lastLoggedIn' = date/time of the login, and 'sessionID' = new ObjectId
	// converted to a string.  When this is finished, the updated document is sent back to us, we
	// encrypt its 'sessionID', and save it in the browser.  While the user is logged in, he can't
	// make any successful requests to the API without that sessionID.
	// If the sessionID is deleted from the browser, he is forced to log in again.


	interpret(result: DBUser): void {
		this.__loginResult.ifSuccessful_processResult(
			result,
			(result) => this.__userResultProcessor.process(result)
		);
	}


}
