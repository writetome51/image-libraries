import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { GetSecurityQuestionResultCheckService } from './get-security-question-result-check.service';
import { RunTasksNeededAfterSuccessfulGettingSecurityQuestionService }
	from './run-tasks-needed-after-successful-getting-security-question.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__runTasksNeededAfterSuccessfulResult:
			RunTasksNeededAfterSuccessfulGettingSecurityQuestionService
	) {
		super(__getSecurityQuestionResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
