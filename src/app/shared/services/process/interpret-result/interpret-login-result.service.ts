import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from '@run-post-success-tasks/run-tasks-after-login.service';
import { InterpretExistingUserDBOperationResultService }
	from './interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretLoginResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
