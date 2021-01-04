import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleGetSecurityQuestionErrorService }
	from './handle-get-security-question-error.service';
import { RunTasksAfterGettingSecurityQuestionService }
	from './run-tasks-after-getting-security-question.service';


@Injectable({providedIn: 'root'})
export class GetSecurityQuestionResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetSecurityQuestionErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingSecurityQuestionService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
