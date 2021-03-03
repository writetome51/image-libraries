import { InterpretDataTransportResultService }
	from '@services/process/../../../../../../../services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleAddImageToLibraryErrorService }
	from './handle-add-image-to-library-error.service';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretAddImageToLibraryResultService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleAddImageToLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
