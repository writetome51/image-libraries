import { HandleDataTransportErrorService }
	from '@services/processor-related/../../../../../shared/services/processor/handle-data-transport-error/handle-data-transport-error.service';
import { InterpretDataTransportResultService }
	from '@services/processor-related/../../../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class InterpretDeleteLibraryResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
