import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { LoginResultProcessorService } from '../user/login-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService extends ResultInterpreterService {

	constructor(
		__loginResult: OperationRequiringEmailPasswordResultService,
		__loginResultProcessor: LoginResultProcessorService
	) {
		super(__loginResult, __loginResultProcessor);
	}

}
