import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterUpdateOfEmailService }
	from './run-tasks-needed-after-update-of-email.service';
import { DataTransportResultCheckService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterUpdateOfEmailService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
