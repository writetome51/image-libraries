import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetSecurityQuestionResultCheckService }
	from './data-transport-result-check/get-security-question-result-check.service';
import { GetSecurityQuestionResultProcessorService }
	from './result-processor/get-security-question-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetSecurityQuestionResultInterpreterService
	extends DataTransportResultInterpreterService {

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
