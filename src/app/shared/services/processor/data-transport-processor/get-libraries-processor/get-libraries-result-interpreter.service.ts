import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';


@Injectable({providedIn: 'root'})
export class GetLibrariesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}