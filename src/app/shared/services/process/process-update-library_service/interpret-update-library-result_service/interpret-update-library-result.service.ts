import { Injectable } from '@angular/core';
import { RunTasksAfterUpdateOfLibraryService } from './run-tasks-after-update-of-library.service';
import { HandleUpdateOrNewLibraryErrorService }
	from '@services/process/handle-error/handle-update-or-new-library-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretUpdateLibraryResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdateOfLibraryService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
