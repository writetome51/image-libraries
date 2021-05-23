import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class InterpretDeleteSelectedImagesResultService
		extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
