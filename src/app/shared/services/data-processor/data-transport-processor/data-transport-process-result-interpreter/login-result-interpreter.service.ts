import { DataTransportProcessResultInterpreterService }
	from './data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: 'root'})
export class LoginResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
