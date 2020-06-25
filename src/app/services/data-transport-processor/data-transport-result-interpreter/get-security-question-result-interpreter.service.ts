import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetSecurityQuestionResultCheckService }
	from './data-transport-result-check/get-security-question-result-check.service';
import { RunTasksNeededAfterSuccessfulGettingSecurityQuestionService }
	from './run-tasks-needed-after-successful-result/get/run-tasks-needed-after-successful-getting-security-question.service';


@Injectable({
	providedIn: 'root'
})
export class GetSecurityQuestionResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__runTasksNeededAfterSuccessfulResult:
			RunTasksNeededAfterSuccessfulGettingSecurityQuestionService
	) {
		super(__getSecurityQuestionResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
