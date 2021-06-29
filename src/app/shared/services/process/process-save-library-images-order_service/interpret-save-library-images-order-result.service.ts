import { Injectable } from '@angular/core';
import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-error/handle-update-or-new-library-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { RunTasksAfterChangingLibraryImagesOrderService }
	from '@run-post-success-tasks/run-tasks-after-changing-library-images-order.service';


@Injectable({providedIn: 'root'})
export class InterpretSaveLibraryImagesOrderResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterChangingLibraryImagesOrderService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
