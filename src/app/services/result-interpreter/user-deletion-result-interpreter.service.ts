import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user/user-logout-or-deletion-result-processor.service';
import { ResultInterpreterService } from './result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService extends ResultInterpreterService {


	constructor(
		private __alert: AlertService,
		__userDeletionResult: OperationRequiringEmailPasswordResultService,
		__userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
		super(__userDeletionResult, __userDeletionResultProcessor);

		this._process = (result) => {
			super._process(result);
			this.__alert.success = 'Account successfully deleted';
		};
	}


}
