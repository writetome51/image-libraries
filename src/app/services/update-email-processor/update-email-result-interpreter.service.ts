import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { ResultInterpreterService } from '../result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailResultInterpreterService extends ResultInterpreterService {

	constructor(
		__updateEmailResult: OperationRequiringEmailPasswordResultService,
		__userResultProcessor: UserResultProcessorService
	) {
		super(__updateEmailResult, __userResultProcessor);
	}

}
