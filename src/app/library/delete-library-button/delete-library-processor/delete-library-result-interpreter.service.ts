import { DataTransportProcessResultInterpreterService }
	from '../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService } from './run-tasks-after-deletion-of-library.service';


@Injectable({providedIn: 'root'})
export class DeleteLibraryResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__dataTransportResultCheck: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
