import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulUpdateOfPasswordService }
	from './run-tasks-needed-after-successful-update-of-password.service';
import { DataTransportResultCheckService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulUpdateOfPasswordService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
