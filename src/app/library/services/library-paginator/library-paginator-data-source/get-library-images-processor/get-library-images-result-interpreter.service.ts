import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleGetLibraryImagesErrorService } from './handle-get-library-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryImagesService }
	from './run-tasks-after-getting-library-images.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImagesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetLibraryImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImagesService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
