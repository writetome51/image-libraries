import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { DataTransportProcessResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';


@Injectable({providedIn: 'root'})
export class LogoutResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__dataTransportResultCheck: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
