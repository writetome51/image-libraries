import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterCreationOfNewLibraryService }
	from './run-tasks-needed-after-creation-of-new-library.service';
import { UpdateOrNewLibraryResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterCreationOfNewLibraryService,
	) {
		super(__newLibraryResultCheck, __runPostSuccessTasks);
	}

}
