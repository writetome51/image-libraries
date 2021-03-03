import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdateEmailResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
