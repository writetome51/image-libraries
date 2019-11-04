import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { ResultInterpreterService } from '../result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordResultInterpreterService extends ResultInterpreterService {

	constructor(
		__updatePasswordResult: OperationRequiringEmailPasswordResultService,
		__userResultProcessor: UserResultProcessorService
	) {
		super(__updatePasswordResult, __userResultProcessor);
	}

}
