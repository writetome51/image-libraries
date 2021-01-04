import { DataTransportProcessResultInterpreterService }
	from './data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from './handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from './run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: 'root'})
export class LoginResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__dataTransportResultCheck: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
