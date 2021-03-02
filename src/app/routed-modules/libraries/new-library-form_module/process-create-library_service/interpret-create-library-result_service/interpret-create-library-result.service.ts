import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewLibraryService }
	from './run-tasks-after-creating-new-library.service';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-data-transport-error/handle-update-or-new-library-error.service';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class InterpretCreateLibraryResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
