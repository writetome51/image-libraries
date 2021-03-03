import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService } from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdatePasswordResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
