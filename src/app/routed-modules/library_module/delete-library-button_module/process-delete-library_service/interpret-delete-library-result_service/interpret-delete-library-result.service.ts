import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class InterpretDeleteLibraryResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
