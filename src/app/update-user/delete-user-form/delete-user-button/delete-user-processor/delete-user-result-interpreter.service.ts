import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterDeletionOfUserService }
	from './run-tasks-needed-after-deletion-of-user.service';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterDeletionOfUserService
	) {
		super(__dataTransportResultCheckService, __runPostSuccessTasks);
	}

}
