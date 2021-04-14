import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class InterpretDeleteLibraryResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
