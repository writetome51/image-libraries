import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdateOfLibraryService }
	from './run-tasks-after-update-of-library.service';
import { UpdateOrNewLibraryResultCheckService }
	from '@data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})
export class UpdateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterUpdateOfLibraryService,
	) {
		super(__updateLibraryResultCheck, __runPostSuccessTasks);
	}

}
