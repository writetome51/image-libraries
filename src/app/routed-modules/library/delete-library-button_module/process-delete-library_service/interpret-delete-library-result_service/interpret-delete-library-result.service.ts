import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';
import { HandleDataTransportErrorService }
	from '@handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class InterpretDeleteLibraryResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
