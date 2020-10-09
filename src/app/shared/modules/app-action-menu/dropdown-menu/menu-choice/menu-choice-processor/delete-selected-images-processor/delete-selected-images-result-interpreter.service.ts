import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';


@Injectable()
export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__dataTransportResultCheckService, __runPostSuccessTasks);
	}

}
