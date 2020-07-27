import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { GetSecurityQuestionResultCheckService } from './get-security-question-result-check.service';
import { RunTasksNeededAfterGettingSecurityQuestionService }
	from './run-tasks-needed-after-getting-security-question.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__runTasksNeededAfterSuccessfulProcess:
			RunTasksNeededAfterGettingSecurityQuestionService
	) {
		super(__getSecurityQuestionResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
