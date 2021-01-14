import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingEmailService } from './run-tasks-after-updating-email.service';
import { DataTransportProcessResultInterpreterService }
	from '@services/processor/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from '@services/processor/data-transport-processor/data-transport-process-result-interpreter/handle-data-transport-process-error/handle-data-transport-process-error.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingEmailService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
