import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { RunTasksNeededAfterSuccessfulDeletionOfSelectedImagesService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-deletion-of-selected-images.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runTasksNeededAfterSuccessfulResult:
			RunTasksNeededAfterSuccessfulDeletionOfSelectedImagesService
	) {
		super(__dataTransportResultCheckService, __runTasksNeededAfterSuccessfulResult);
	}

}
