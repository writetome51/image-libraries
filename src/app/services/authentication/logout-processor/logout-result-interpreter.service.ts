import { HttpRequestResultService } from '../../http-request-result.service';
import { Injectable } from '@angular/core';
import { LogoutResultProcessorService } from './logout-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService {


	constructor(
		private __logoutResultProcessor: LogoutResultProcessorService,
		private __httpRequestResult: HttpRequestResultService
	) {
	}


	interpret(result): void {
		this.__httpRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => this.__logoutResultProcessor.process(result)
		);
	}


}
