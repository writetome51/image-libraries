import { Injectable } from '@angular/core';
import { HandleGetSecurityQuestionErrorService }
	from './handle-get-security-question-error.service';
import { RunTasksAfterGettingSecurityQuestionService }
	from './run-tasks-after-getting-security-question.service';
import { SecurityQuestionServicesModule } from '../../../../security-question-services.module';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class InterpretGetSecurityQuestionResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleGetSecurityQuestionErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingSecurityQuestionService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
