import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '../../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { HandleUpdateOrNewLibraryErrorService }	// tslint:disable-next-line:max-line-length
	from 'handle-data-transport-process-error/handle-update-or-new-library-error.service';


@Injectable({providedIn: 'root'})
export class CreateLibraryResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__newLibraryResultCheck: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__newLibraryResultCheck, __runPostSuccessTasks);
	}

}
