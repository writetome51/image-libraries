import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulCreationOfNewLibraryService }
	from './run-tasks-needed-after-successful-creation-of-new-library.service';
import { UpdateOrNewLibraryResultCheckService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulCreationOfNewLibraryService,
	) {
		super(__newLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
