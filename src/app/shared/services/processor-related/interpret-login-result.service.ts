import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';
import { HandleDataTransportErrorService }
	from './handle-error/handle-data-transport-error/handle-data-transport-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLoginService }
	from './run-post-success-tasks/run-tasks-after-login.service';


@Injectable({providedIn: 'root'})
export class InterpretLoginResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterLoginService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
