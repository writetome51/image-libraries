import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulLogoutService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-logout.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulLogoutService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
