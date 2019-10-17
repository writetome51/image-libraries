import { Injectable } from '@angular/core';
import { HttpRequestResultService } from '../../http-request-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { SuccessOrErrorMessageService } from '../../success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __httpRequestResult: HttpRequestResultService,
		private __userLogoutOrDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
	}


	interpret(result) {
		this.__httpRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userLogoutOrDeletionResultProcessor.process(result);
				this.__successOrErrorMessage.success = 'Account successfully deleted';
			}
		);
	}

}
