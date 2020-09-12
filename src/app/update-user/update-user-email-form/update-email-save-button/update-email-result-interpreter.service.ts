import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterUpdatingEmailService }
	from './run-tasks-needed-after-updating-email.service';
import { DataTransportResultCheckService }
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterUpdatingEmailService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
