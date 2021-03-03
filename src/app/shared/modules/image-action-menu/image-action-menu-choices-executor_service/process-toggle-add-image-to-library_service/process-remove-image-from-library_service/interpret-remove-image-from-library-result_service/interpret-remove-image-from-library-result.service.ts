import { Injectable } from '@angular/core';
import { HandleRemoveImageFromLibraryErrorService }
	from './handle-remove-image-from-library-error.service';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';
import { ImageActionMenuServicesModule }
	from '@app/shared/modules/image-action-menu/image-action-menu-services.module';
import { InterpretDataTransportResultService } 
	from '@process-related/interpret-data-transport-result.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretRemoveImageFromLibraryResultService
	extends InterpretDataTransportResultService {

	constructor(
		____handleError: HandleRemoveImageFromLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(____handleError, __runPostSuccessTasks);
	}

}
