import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterGettingLibrariesService }
	from './run-tasks-needed-after-getting-libraries.service';


@Injectable({providedIn: 'root'})

export class GetLibrariesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterGettingLibrariesService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
