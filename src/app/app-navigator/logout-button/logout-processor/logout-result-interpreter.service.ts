import { Injectable } from '@angular/core';
import { RunTasksNeededAfterLogoutService }
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/run-tasks-needed-after-logout.service';
import { DataTransportResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterLogoutService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
