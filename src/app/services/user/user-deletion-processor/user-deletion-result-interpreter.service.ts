import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { AlertService } from '../../alert.service';
import { OperationRequiringEmailPasswordResultService }
	from '../../operation-requiring-email-password-result.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService {

	constructor(
		private __alert: AlertService,
		private __userDeletionApiRequestResult: OperationRequiringEmailPasswordResultService,
		private __userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
	}


	async interpret(result) {
		await this.__userDeletionApiRequestResult.ifSuccessful_processResult(
			result,
			(result) => {
				this.__userDeletionResultProcessor.process(result);
				this.__alert.success = 'Account successfully deleted';
			}
		);
	}

}
