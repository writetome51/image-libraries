import { Injectable } from '@angular/core';
import { RunTasksNeededAfterLogoutService }	// tslint:disable-next-line:max-line-length
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-process/run-tasks-needed-after-logout.service';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
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
