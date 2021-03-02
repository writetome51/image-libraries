import { Injectable } from '@angular/core';
import { RunTasksAfterUpdateOfLibraryService }
	from './run-tasks-after-update-of-library.service';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-data-transport-error/handle-update-or-new-library-error.service';


@Injectable({providedIn: 'root'})
export class InterpretUpdateLibraryResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdateOfLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
