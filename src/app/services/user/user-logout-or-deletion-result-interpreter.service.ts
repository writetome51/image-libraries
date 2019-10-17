import { HttpRequestResultService } from '../http-request-result.service';
import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from './user-logout-or-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutOrDeletionResultInterpreterService {


	constructor(
		private __userLogoutOrDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService,
		private __httpRequestResult: HttpRequestResultService
	) {
	}


	interpret(result): void {
		this.__httpRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => this.__userLogoutOrDeletionResultProcessor.process(result)
		);
	}


}
