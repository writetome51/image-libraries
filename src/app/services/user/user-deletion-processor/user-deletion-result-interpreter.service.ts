import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { SuccessOrErrorMessageService } from '../../success-or-error-message.service';
import { UserDeletionOrLoginApiRequestResultService }
	from '../../user-deletion-or-login-api-request-result.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __userDeletionApiRequestResult: UserDeletionOrLoginApiRequestResultService,
		private __userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
	}


	interpret(result) {
		this.__userDeletionApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userDeletionResultProcessor.process(result);
				this.__successOrErrorMessage.success = 'Account successfully deleted';
			}
		);
	}

}
