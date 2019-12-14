import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-transport-result-check/operation-requiring-email-password-result-check.service';
import { UpdateEmailResultProcessorService }
	from './result-processor/update-email-result-processor.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

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
