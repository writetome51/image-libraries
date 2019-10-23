import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { AlertService } from '../../alert.service';
import { ApiRequestRequiringEmailPasswordResultService }
	from '../../api-request-requiring-email-password-result.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService {

	constructor(
		private __alert: AlertService,
		private __userDeletionApiRequestResult: ApiRequestRequiringEmailPasswordResultService,
		private __userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
	}


	interpret(result) {
		this.__userDeletionApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userDeletionResultProcessor.process(result);
				this.__alert.success = 'Account successfully deleted';
			}
		);
	}

}
