import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { ResultInterpreterService } from './result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailOrPasswordResultInterpreterService extends ResultInterpreterService {

	constructor(
		__updateEmailOrPasswordResult: OperationRequiringEmailPasswordResultService,
		__userResultProcessor: UserResultProcessorService
	) {
		super(__updateEmailOrPasswordResult, __userResultProcessor);
	}

}
