import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';


@Injectable({providedIn: 'root'})
export class GetLibrariesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
