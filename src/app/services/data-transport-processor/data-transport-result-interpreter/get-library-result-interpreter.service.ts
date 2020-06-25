import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulGettingLibraryService }
	from './run-tasks-needed-after-successful-result/get/run-tasks-needed-after-successful-getting-library.service';
import { GetLibraryResultCheckService }
	from './data-transport-result-check/get-library-result-check.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryResultCheck: GetLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingLibraryService,
	) {
		super(__getLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
