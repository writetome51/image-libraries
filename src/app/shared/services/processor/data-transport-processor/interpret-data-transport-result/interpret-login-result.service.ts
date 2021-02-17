import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from '@run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: 'root'})
export class LoginResultInterpreterService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
