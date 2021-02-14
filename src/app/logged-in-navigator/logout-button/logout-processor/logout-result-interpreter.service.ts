import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';
import { LoggedInNavigatorServicesModule }
	from '@app/logged-in-navigator/logged-in-navigator-services.module';


@Injectable({providedIn:  LoggedInNavigatorServicesModule})
export class LogoutResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
