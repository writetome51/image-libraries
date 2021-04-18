import { HandleAddImageToLibraryErrorService } from './handle-add-image-to-library-error.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretAddImageToLibraryResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleAddImageToLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
