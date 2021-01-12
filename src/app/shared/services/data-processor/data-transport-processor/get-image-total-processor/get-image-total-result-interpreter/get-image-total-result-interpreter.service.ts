import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { HandleGetImageTotalErrorService } from './handle-get-image-total-error.service';
import { RunTasksAfterGettingImageTotalService }
	from './run-tasks-after-getting-image-total.service';


@Injectable({providedIn: 'root'})
export class GetImageTotalResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
