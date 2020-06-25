import { NewUserResultCheckService } from './data-transport-result-check/new-user-result-check.service';
import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulCreationOfNewUserService }
	from './run-tasks-needed-after-successful-result/create/run-tasks-needed-after-successful-creation-of-new-user.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newUserResultCheck: NewUserResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulCreationOfNewUserService,
	) {
		super(__newUserResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
