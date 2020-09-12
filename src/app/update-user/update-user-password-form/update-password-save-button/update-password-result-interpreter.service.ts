import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterUpdatingPasswordService }
	from './run-tasks-needed-after-updating-password.service';
import { DataTransportResultCheckService }
	from '../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterUpdatingPasswordService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
