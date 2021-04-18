import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService } from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdatePasswordResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
