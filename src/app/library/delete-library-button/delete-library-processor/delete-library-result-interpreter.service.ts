import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterDeletionOfLibraryService }
	from './run-tasks-needed-after-deletion-of-library.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterDeletionOfLibraryService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulProcess);
	}

}
