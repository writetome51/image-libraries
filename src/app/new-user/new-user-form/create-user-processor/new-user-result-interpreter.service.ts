import { NewUserResultCheckService } from './new-user-result-check.service';
import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksAfterCreatingNewUserService }
	from './run-tasks-after-creating-new-user.service';


@Injectable({providedIn: 'root'})
export class NewUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newUserResultCheck: NewUserResultCheckService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__newUserResultCheck, __runPostSuccessTasks);
	}

}
