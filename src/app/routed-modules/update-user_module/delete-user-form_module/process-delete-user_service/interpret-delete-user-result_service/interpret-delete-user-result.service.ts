import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingUserService } from './run-tasks-after-deleting-user.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretDeleteUserResultService extends InterpretDbOperationResultService {

	constructor(
		__handleErrorService: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__handleErrorService, __runPostSuccessTasks);
	}

}
