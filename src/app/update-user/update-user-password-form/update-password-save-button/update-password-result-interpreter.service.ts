import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterUpdateOfPasswordService }
	from './run-tasks-needed-after-update-of-password.service';
import { DataTransportResultCheckService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterUpdateOfPasswordService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
