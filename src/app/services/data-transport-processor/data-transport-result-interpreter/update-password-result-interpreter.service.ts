import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulUpdateOfPasswordService }
	from './run-tasks-needed-after-successful-result/update/run-tasks-needed-after-successful-update-of-password.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__updatePasswordResultProcessor: RunTasksNeededAfterSuccessfulUpdateOfPasswordService
	) {
		super(
			__dataTransportResultCheck,
			__updatePasswordResultProcessor
		);
	}

}
