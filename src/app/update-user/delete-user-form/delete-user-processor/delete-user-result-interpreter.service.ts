import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksAfterDeletingUserService }
	from './run-tasks-after-deleting-user.service';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})
export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__dataTransportResultCheckService, __runPostSuccessTasks);
	}

}
