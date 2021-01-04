import { NewUserResultCheckService } from './new-user-result-check.service';
import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { RunTasksAfterCreatingNewUserService }
	from './run-tasks-after-creating-new-user.service';


@Injectable({providedIn: 'root'})
export class NewUserResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__newUserResultCheck: NewUserResultCheckService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__newUserResultCheck, __runPostSuccessTasks);
	}

}
