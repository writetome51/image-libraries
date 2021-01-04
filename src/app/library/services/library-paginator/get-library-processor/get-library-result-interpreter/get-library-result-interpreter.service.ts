import { DataTransportProcessResultInterpreterService }
	from '../../../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleGetLibraryErrorService } from './handle-get-library-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryService }
	from './run-tasks-after-getting-library/run-tasks-after-getting-library.service';


@Injectable({providedIn: 'root'})
export class GetLibraryResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleGetLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
