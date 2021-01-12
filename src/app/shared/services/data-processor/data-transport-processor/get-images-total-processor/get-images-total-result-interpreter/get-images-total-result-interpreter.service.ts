import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { HandleGetImagesTotalErrorService } from './handle-get-images-total-error.service';
import { RunTasksAfterGettingImagesTotalService }
	from './run-tasks-after-getting-images-total.service';


@Injectable({providedIn: 'root'})
export class GetImagesTotalResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetImagesTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
