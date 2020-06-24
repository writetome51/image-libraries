import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulUpdateOfEmailService }
	from './run-tasks-needed-after-successful-result/update/run-tasks-needed-after-successful-update-of-email.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__updateEmailResultProcessor: RunTasksNeededAfterSuccessfulUpdateOfEmailService
	) {
		super(
			__dataTransportResultCheck,
			__updateEmailResultProcessor
		);
	}

}
