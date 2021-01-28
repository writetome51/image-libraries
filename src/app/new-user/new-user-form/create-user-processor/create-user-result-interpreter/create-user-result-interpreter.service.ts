import { DataTransportProcessResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleCreateUserErrorService } from './handle-create-user-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewUserService } from './run-tasks-after-creating-new-user.service';


@Injectable({providedIn: 'root'})
export class CreateUserResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
