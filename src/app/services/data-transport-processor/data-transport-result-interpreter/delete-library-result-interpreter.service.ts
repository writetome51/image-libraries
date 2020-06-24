import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulLibraryDeletionService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-library-deletion.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulLibraryDeletion: RunTasksNeededAfterSuccessfulLibraryDeletionService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulLibraryDeletion);
	}

}
