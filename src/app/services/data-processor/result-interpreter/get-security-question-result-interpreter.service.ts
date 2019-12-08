import { Injectable } from '@angular/core';
import { ResultInterpreterService } from './result-interpreter.service';
import { GetSecurityQuestionResultCheckService }
	from './data-operation-result-check/get-security-question-result-check.service';
import { GetSecurityQuestionResultProcessorService }
	from './result-processor/get-security-question-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetSecurityQuestionResultInterpreterService extends ResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__getSecurityQuestionResultProcessor: GetSecurityQuestionResultProcessorService
	) {
		super(
			__getSecurityQuestionResultCheck,
			__getSecurityQuestionResultProcessor
		);
	}

}
