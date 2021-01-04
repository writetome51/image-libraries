import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { RunTasksAfterUpdatingPasswordService } from './run-tasks-after-updating-password.service';


@Injectable({providedIn: 'root'})
export class UpdatePasswordResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
