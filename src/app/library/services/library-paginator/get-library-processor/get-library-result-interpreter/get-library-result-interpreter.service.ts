import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { GetLibraryResultCheckService } from './get-library-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryService }
	from './run-tasks-after-getting-library/run-tasks-after-getting-library.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: GetLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryService,
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
