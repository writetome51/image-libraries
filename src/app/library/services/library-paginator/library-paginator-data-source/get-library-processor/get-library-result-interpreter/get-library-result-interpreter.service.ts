import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleGetLibraryErrorService } from './handle-get-library-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryImagesService }
	from './run-tasks-after-getting-library/run-tasks-after-getting-library-images.service';


@Injectable({providedIn: 'root'})
export class GetLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImagesService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
