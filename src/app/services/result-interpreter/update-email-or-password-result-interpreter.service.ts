import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultCheckService }
	from '../data-operation-result-check/operation-requiring-email-password-result-check.service';
import { ResultInterpreterService } from './result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailOrPasswordResultInterpreterService extends ResultInterpreterService {

	constructor(
		__updateEmailOrPasswordResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__userResultProcessor: UserResultProcessorService
	) {
		super(__updateEmailOrPasswordResultCheck, __userResultProcessor);
	}

}
