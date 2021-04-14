import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdateEmailResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
