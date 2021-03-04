import { Injectable } from '@angular/core';
import { HandleRemoveImageFromLibraryErrorService }
	from './handle-remove-image-from-library-error.service';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretRemoveImageFromLibraryResultService
	extends InterpretDbOperationResultService {

	constructor(
		____handleError: HandleRemoveImageFromLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(____handleError, __runPostSuccessTasks);
	}

}
