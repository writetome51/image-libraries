import { Injectable } from '@angular/core';
import { ResultInterpreterService } from './result-interpreter.service';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-operation-result-check/operation-requiring-email-password-result-check.service';
import { UpdateEmailResultProcessorService }
	from './result-processor/update-email-result-processor.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends ResultInterpreterService {

	constructor(
		__opRequiringEmailPasswordResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__updateEmailResultProcessor: UpdateEmailResultProcessorService
	) {
		super(
			__opRequiringEmailPasswordResultCheck,
			__updateEmailResultProcessor
		);
	}

}
