import { Injectable } from '@angular/core';
import { RunTasksNeededAfterSuccessfulLogoutService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/authentication/run-tasks-needed-after-successful-logout.service';
import { DataTransportResultInterpreterService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulLogoutService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
