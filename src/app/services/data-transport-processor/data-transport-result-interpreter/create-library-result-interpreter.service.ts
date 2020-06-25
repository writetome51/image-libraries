import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulCreationOfNewLibraryService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-creation-of-new-library.service';
import { UpdateOrNewLibraryResultCheckService }
	from './data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulCreationOfNewLibraryService,
	) {
		super(__updateLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
