import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '../../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { GetSecurityQuestionResultCheckService }
	from './get-security-question-result-check.service';
import { RunTasksAfterGettingSecurityQuestionService }
	from './run-tasks-after-getting-security-question.service';


@Injectable({providedIn: 'root'})
export class GetSecurityQuestionResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__getSecurityQuestionResultCheck: GetSecurityQuestionResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingSecurityQuestionService
	) {
		super(__getSecurityQuestionResultCheck, __runPostSuccessTasks);
	}

}
