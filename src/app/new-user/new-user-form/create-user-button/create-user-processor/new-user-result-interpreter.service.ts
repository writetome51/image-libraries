import { NewUserResultCheckService } from './new-user-result-check.service';
import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterCreatingNewUserService }
	from './run-tasks-needed-after-creating-new-user.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newUserResultCheck: NewUserResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterCreatingNewUserService,
	) {
		super(__newUserResultCheck, __runPostSuccessTasks);
	}

}
