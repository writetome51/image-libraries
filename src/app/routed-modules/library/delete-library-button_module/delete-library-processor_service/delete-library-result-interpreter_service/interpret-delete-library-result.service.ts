import { HandleDataTransportErrorService }
	from '@data-transport-processor/interpret-data-transport-result/handle-data-transport-error/handle-data-transport-error.service';
import { InterpretDataTransportResultService }
	from '@data-transport-processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';


@Injectable({providedIn: LibraryServicesModule})
export class InterpretDeleteLibraryResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
