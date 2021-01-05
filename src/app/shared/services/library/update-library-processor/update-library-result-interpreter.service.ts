import { Injectable } from '@angular/core';
import { RunTasksAfterUpdateOfLibraryService }
	from './run-tasks-after-update-of-library.service';
import { DataTransportProcessResultInterpreterService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleUpdateOrNewLibraryErrorService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/handle-data-transport-process-error/handle-update-or-new-library-error.service';


@Injectable({providedIn: 'root'})
export class UpdateLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdateOfLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
