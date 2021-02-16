import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService }
	from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdatePasswordResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
