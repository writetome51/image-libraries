import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibrariesResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
