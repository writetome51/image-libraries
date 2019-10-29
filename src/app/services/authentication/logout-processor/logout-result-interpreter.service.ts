import { Injectable } from '@angular/core';
import { DataOperationResultService } from '../../data-operation-result/data-operation-result.service';
import { ResultInterpreter } from '../../../../interfaces/result-interpreter';
import { UserLogoutOrDeletionResultProcessorService }
	from '../../user/user-logout-or-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService implements ResultInterpreter {


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
