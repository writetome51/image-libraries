import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from '../data-operation-result-check/operation-requiring-email-password-result-check.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user/user-logout-or-deletion-result-processor.service';
import { ResultInterpreterService } from './result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService extends ResultInterpreterService {


	constructor(
		private __alert: AlertService,
		__userDeletionResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__userDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
		super(__userDeletionResultCheck, __userDeletionResultProcessor);

		this._process = (result) => {
			super._process(result);
			this.__alert.success = 'Account successfully deleted';
		};
	}


}
