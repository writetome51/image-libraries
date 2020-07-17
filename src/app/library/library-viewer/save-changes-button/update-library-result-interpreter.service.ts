import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { UpdateOrNewLibraryResultCheckService }
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/update-or-new-library-result-check.service';
import { RunTasksNeededAfterSuccessfulUpdateOfLibraryService }
	from './run-tasks-needed-after-successful-update-of-library.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulUpdateOfLibraryService,
	) {
		super(__updateLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
