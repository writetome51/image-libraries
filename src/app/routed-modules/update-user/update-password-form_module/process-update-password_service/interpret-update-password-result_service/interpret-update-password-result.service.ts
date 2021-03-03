import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService }
	from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';
import { HandleDbOperationErrorService }
	from '@process-related/handle-error/handle-db-operation-error_service/handle-db-operation-error.service';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdatePasswordResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
