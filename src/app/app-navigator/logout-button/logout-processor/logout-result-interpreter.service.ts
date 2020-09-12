import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';


@Injectable({providedIn: 'root'})

export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
