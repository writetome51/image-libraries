import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { AlertService } from '../../alert.service';
import { ApiRequestRequiringUserCredentialsResultService }
	from '../../api-request-requiring-user-credentials-result.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService {

	constructor(
		private __alert: AlertService,
		private __userDeletionApiRequestResult: ApiRequestRequiringUserCredentialsResultService,
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
