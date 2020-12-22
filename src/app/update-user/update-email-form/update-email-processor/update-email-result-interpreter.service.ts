import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
