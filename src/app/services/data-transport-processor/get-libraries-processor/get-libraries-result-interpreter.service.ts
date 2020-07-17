import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulGettingLibrariesService }
	from './run-tasks-needed-after-successful-getting-libraries.service';


@Injectable({providedIn: 'root'})

export class GetLibrariesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingLibrariesService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
