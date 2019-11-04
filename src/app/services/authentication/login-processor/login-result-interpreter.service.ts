import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultService }
	from '../../data-operation-result/operation-requiring-email-password-result.service';
import { UserResultProcessorService } from '../../user/user-result-processor.service';
import { ResultInterpreterService } from '../../result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService extends ResultInterpreterService {

	constructor(
		__loginResult: OperationRequiringEmailPasswordResultService,
		__userResultProcessor: UserResultProcessorService
	) {
		super(__loginResult, __userResultProcessor);
	}

}
