import { HandleGetLibraryImagesErrorService } from './handle-get-library-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryImagesService }
	from './run-tasks-after-getting-library-images.service';
import { LibraryServicesModule } from '@app/routed-modules/library_module/library-services.module';
import { InterpretDataTransportResultService }
	from '@services/process/interpret-data-transport-result.service';


@Injectable({providedIn: LibraryServicesModule})
export class InterpretGetLibraryImagesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleGetLibraryImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImagesService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
