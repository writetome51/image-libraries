import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterLoginService }
	from '@run-post-success-tasks/run-tasks-needed-after-login.service';


@Injectable({providedIn: 'root'})

export class LoginResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterLoginService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
