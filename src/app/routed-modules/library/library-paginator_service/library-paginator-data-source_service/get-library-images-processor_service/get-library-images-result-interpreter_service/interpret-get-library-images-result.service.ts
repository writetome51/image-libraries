import { InterpretDataTransportResultService }
	from '@services/processor-related/../../../../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleGetLibraryImagesErrorService } from './handle-get-library-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryImagesService }
	from './run-tasks-after-getting-library-images.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class InterpretGetLibraryImagesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleGetLibraryImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImagesService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
