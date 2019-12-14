import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-transport-result-check/operation-requiring-email-password-result-check.service';
import { UpdatePasswordResultProcessorService }
	from './result-processor/update-password-result-processor.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__opRequiringEmailPasswordResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__updatePasswordResultProcessor: UpdatePasswordResultProcessorService
	) {
		super(
			__opRequiringEmailPasswordResultCheck,
			__updatePasswordResultProcessor
		);
	}

}
