import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterDeletingImagesService }
	from './run-tasks-needed-after-deleting-images.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterDeletingImagesService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulProcess);
	}

}
