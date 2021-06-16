import { HandleAddImagesToLibraryErrorService } from './handle-add-images-to-library-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingLibraryService }
	from '@run-post-success-tasks/run-tasks-after-updating-library.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretAddImagesToLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleAddImagesToLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
