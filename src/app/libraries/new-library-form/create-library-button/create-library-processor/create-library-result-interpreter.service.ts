import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterCreationOfNewLibraryService }
	from './run-tasks-needed-after-creation-of-new-library.service';
import { UpdateOrNewLibraryResultCheckService }
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterCreationOfNewLibraryService,
	) {
		super(__newLibraryResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
