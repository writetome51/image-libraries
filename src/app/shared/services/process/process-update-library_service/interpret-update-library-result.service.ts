import { Injectable } from '@angular/core';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-error/handle-update-or-new-library-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { RunTasksAfterUpdatingLibraryService }
	from '@run-post-success-tasks/run-tasks-after-updating-library.service';


@Injectable({providedIn: 'root'})
export class InterpretUpdateLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
