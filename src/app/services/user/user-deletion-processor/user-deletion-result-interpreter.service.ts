import { AlertService } from '../../alert.service';
import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultService }
	from '../../data-operation-result/operation-requiring-email-password-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user-logout-or-deletion-result-processor.service';
import { ResultInterpreter } from '../../../../interfaces/result-interpreter';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService implements ResultInterpreter {

	constructor(
		private __alert: AlertService,
		private __userDeletionResult: OperationRequiringEmailPasswordResultService,
		private __userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
	}


	async interpret(result) {
		await this.__userDeletionResult.ifSuccessful_processResult(
			result,
			(result) => {
				this.__userDeletionResultProcessor.process(result);
				this.__alert.success = 'Account successfully deleted';
			}
		);
	}

}
