import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingLibraryService }
	from '@run-post-success-tasks/run-tasks-after-updating-library.service';
import { ImageActionMenuServicesModule } from '../../../modules/image-action-menu_module/image-action-menu-services.module';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { HandleExistingUserDBOperationErrorService }
	from '@handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretRemoveImagesFromLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
