import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterDeletionOfLibraryService }
	from './run-tasks-needed-after-deletion-of-library.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterDeletionOfLibraryService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
