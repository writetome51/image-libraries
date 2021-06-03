import { HandleAddImagesToLibraryErrorService } from './handle-add-images-to-library-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '@modules/image-action-menu_module/image-action-menu-choices-executor_service/process-toggle-add-image-to-library_service/run-tasks-after-adding-or-removing-image-from-library.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretAddImagesToLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleAddImagesToLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
