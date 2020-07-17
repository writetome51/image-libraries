import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulDeletionOfImagesService }
	from './run-tasks-needed-after-successful-deletion-of-images.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult:
			RunTasksNeededAfterSuccessfulDeletionOfImagesService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulResult);
	}

}
