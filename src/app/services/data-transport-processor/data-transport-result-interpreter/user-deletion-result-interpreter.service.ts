import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-transport-result-check/operation-requiring-email-password-result-check.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { UserDeletionResultProcessorService }
	from './result-processor/user-deletion-result-processor.service';


@Injectable({providedIn: 'root'})

export class UserDeletionResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__userDeletionResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__userDeletionResultProcessor: UserDeletionResultProcessorService
	) {
		super(__userDeletionResultCheck, __userDeletionResultProcessor);
	}

}
