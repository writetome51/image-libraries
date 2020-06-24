import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { UpdateOrNewLibraryResultCheckService }
	from './data-transport-result-check/update-or-new-library-result-check.service';
import { RunTasksNeededAfterSuccessfulUpdateOfLibraryService }
	from './run-tasks-needed-after-successful-result/update/run-tasks-needed-after-successful-update-of-library.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__updateLibraryResultProcessor: RunTasksNeededAfterSuccessfulUpdateOfLibraryService,
	) {
		super(__updateLibraryResultCheck, __updateLibraryResultProcessor);
	}

}
