import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulDeletionOfUserService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/delete/run-tasks-needed-after-successful-deletion-of-user.service';
import { DataTransportResultCheckService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulDeletionOfUserService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulResult);
	}

}
