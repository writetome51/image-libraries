import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService }
	from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';
import { HandleDataTransportErrorService }
	from '@handle-data-transport-error/handle-data-transport-error.service';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdatePasswordResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
