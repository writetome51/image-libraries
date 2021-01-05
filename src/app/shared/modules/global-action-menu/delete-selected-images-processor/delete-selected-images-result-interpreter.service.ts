import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '../../../services/data-processor/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';


@Injectable()
export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
