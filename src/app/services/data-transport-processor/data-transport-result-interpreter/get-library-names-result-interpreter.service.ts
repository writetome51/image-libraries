import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulGettingLibraryNamesService }
	from './run-tasks-needed-after-successful-result/get/run-tasks-needed-after-successful-getting-library-names.service';


@Injectable({
	providedIn: 'root'
})
export class GetLibraryNamesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingLibraryNamesService
	) {
		super(__dataTransportResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
