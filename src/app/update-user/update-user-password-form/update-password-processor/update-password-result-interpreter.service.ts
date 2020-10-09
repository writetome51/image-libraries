import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { RunTasksAfterUpdatingPasswordService } from './run-tasks-after-updating-password.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
