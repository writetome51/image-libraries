import { HandleUpdateOrNewLibraryErrorService }
	from '@handle-error/handle-update-or-new-library-error.service';
import { Injectable } from '@angular/core';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { LibraryImagesListServicesModule } from '../library-images-list-services.module';
import { RunTasksAfterChangingLibraryImagesOrderService }
	from '@run-post-success-tasks/run-tasks-after-changing-library-images-order.service';


@Injectable({providedIn: LibraryImagesListServicesModule})
export class InterpretSaveLibraryImagesOrderResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleUpdateOrNewLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterChangingLibraryImagesOrderService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
