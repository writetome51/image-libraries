import { HandleDbOperationErrorService }
	from '@process-related/handle-error/handle-db-operation-error/handle-db-operation-error.service';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';
import { UpdateUserServicesModule }
	from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdateEmailResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
