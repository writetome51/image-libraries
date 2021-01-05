import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '../../../shared/services/data-processor/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { RunTasksAfterDeletingUserService }
	from './run-tasks-after-deleting-user.service';
import { HandleDataTransportProcessErrorService }	// tslint:disable-next-line:max-line-length
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';


@Injectable({providedIn: 'root'})
export class DeleteUserResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleErrorService: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__handleErrorService, __runPostSuccessTasks);
	}

}
