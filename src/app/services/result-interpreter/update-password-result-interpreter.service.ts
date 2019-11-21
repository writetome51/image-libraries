import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from '../data-operation-result-check/operation-requiring-email-password-result-check.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { UpdatePasswordResultProcessorService }
	from '../result-processor/update-password-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordResultInterpreterService extends ResultInterpreterService {

	constructor(
		__updatePasswordResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__updatePasswordResultProcessor: UpdatePasswordResultProcessorService
	) {
		super(__updatePasswordResultCheck, __updatePasswordResultProcessor);
	}

}
