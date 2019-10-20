import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from '../../rest-api-request-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../../user/user-logout-or-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService {


	constructor(
		private __logoutResultProcessor: UserLogoutOrDeletionResultProcessorService,
		private __restApiRequestResult: RestAPIRequestResultService
	) {
	}


	interpret(result): void {
		this.__restApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => this.__logoutResultProcessor.process(result)
		);
	}


}
