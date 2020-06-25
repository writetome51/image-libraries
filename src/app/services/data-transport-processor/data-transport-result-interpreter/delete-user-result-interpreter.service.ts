import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulDeletionOfUserService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-deletion-of-user.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulDeletionOfUserService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulResult);
	}

}
