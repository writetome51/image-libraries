import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-operation-result-check/operation-requiring-email-password-result-check.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { LoginResultProcessorService } from './result-processor/login-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService extends ResultInterpreterService {

	constructor(
		__loginResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__loginResultProcessor: LoginResultProcessorService
	) {
		super(__loginResultCheck, __loginResultProcessor);
	}

}
