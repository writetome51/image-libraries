import { Injectable } from '@angular/core';
import { HandleGetSecurityQuestionErrorService }
	from './handle-get-security-question-error.service';
import { RunTasksAfterGettingSecurityQuestionService }
	from './run-tasks-after-getting-security-question.service';
import { SecurityQuestionServicesModule }
	from '@app/routed-modules/security-question/security-question-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class InterpretGetSecurityQuestionResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleGetSecurityQuestionErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingSecurityQuestionService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
