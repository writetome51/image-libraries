import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingUserService } from './run-tasks-after-deleting-user.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretDeleteUserResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleErrorService: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__handleErrorService, __runPostSuccessTasks);
	}

}
