import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-operation-result-check/operation-requiring-email-password-result-check.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { UserDeletionResultProcessorService } from './result-processor/user-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionResultInterpreterService extends ResultInterpreterService {

	constructor(
		__userDeletionResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__userDeletionResultProcessor: UserDeletionResultProcessorService
	) {
		super(__userDeletionResultCheck, __userDeletionResultProcessor);
	}

}
