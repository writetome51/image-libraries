import { Injectable } from '@angular/core';
import { HandleRemoveImageFromLibraryErrorService }
	from './handle-remove-image-from-library-error.service';
import { RunTasksAfterUpdatingLibraryService }
	from '@run-post-success-tasks/run-tasks-after-updating-library.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretRemoveImageFromLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		____handleError: HandleRemoveImageFromLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingLibraryService
	) {
		super(____handleError, __runPostSuccessTasks);
	}

}
