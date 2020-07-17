import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulDeletionOfLibraryService }
	from './run-tasks-needed-after-successful-deletion-of-library.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulDeletionOfLibraryService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulResult);
	}

}
