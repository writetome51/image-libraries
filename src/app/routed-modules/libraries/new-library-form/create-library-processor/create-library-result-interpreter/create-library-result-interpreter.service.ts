import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-data-transport-process-error/handle-update-or-new-library-error.service';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { LibrariesServicesModule } from '../../../libraries-services.module';


@Injectable({providedIn: LibrariesServicesModule})
export class CreateLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
