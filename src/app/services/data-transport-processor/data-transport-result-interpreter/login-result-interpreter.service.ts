import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-transport-result-check/operation-requiring-email-password-result-check.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { LoginResultProcessorService } from './result-processor/login-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__loginResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__loginResultProcessor: LoginResultProcessorService
	) {
		super(__loginResultCheck, __loginResultProcessor);
	}

}
