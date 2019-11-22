import { OperationRequiringEmailPasswordResultCheckService }
	from '../data-operation-result-check/operation-requiring-email-password-result-check.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { UpdateEmailOrPasswordResultProcessorService }
	from '../result-processor/update-email-or-password-result-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class UpdateEmailOrPasswordResultInterpreterService extends ResultInterpreterService {

	set messageFor_resultProcessor(value) {
		this.__updateEmailOrPasswordResultProcessor.resultMessage = value;
	}


	constructor(
		__opRequiringEmailPasswordResultCheckService: OperationRequiringEmailPasswordResultCheckService,
		private __updateEmailOrPasswordResultProcessor: UpdateEmailOrPasswordResultProcessorService
	) {
		super(
			__opRequiringEmailPasswordResultCheckService,
			__updateEmailOrPasswordResultProcessor
		);
	}

}
