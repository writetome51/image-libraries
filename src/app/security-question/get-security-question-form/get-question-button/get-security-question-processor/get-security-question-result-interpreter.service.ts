import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { GetSecurityQuestionResultCheckService }
	from './get-security-question-result-check.service';
import { RunTasksAfterGettingSecurityQuestionService }
	from './run-tasks-after-getting-security-question.service';


@Injectable({providedIn: 'root'})
export class GetSecurityQuestionResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingSecurityQuestionService
	) {
		super(__getSecurityQuestionResultCheck, __runPostSuccessTasks);
	}

}
