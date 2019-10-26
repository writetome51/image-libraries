import { Injectable } from '@angular/core';
import { DataOperationResultService } from '../../data-operation-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../../user/user-logout-or-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService {


	constructor(
		private __logoutResultProcessor: UserLogoutOrDeletionResultProcessorService,
		private __restApiRequestResult: DataOperationResultService
	) {
	}


	interpret(result): void {
		this.__restApiRequestResult.ifSuccessful_processResult(
			result,
			(result) => this.__logoutResultProcessor.process(result)
		);
	}


}
