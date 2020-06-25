import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulLoginService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-login.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class LoginResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulLoginService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
