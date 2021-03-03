import { HandleDbOperationErrorService }
	from '../handle-error/handle-db-operation-error_service/handle-db-operation-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from '@run-post-success-tasks/run-tasks-after-login.service';
import { InterpretDbOperationResultService }
	from './interpret-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretLoginResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
