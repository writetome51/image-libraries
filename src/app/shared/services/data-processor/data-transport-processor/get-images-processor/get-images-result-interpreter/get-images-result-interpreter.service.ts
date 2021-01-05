import { DataTransportProcessResultInterpreterService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleGetImagesErrorService } from './handle-get-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImagesService } from './run-tasks-after-getting-images.service';


@Injectable({providedIn: 'root'})
export class GetImagesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
