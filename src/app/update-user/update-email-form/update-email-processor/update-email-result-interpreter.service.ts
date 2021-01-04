import { DataTransportProcessResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
