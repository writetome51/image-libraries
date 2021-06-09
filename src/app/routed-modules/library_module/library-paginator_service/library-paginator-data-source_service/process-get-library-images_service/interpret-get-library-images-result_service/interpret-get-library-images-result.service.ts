import { HandleGetLibraryImagesErrorService } from './handle-get-library-images-error.service';
import { Injectable } from '@angular/core';
import { LibraryServicesModule } from '../../../../library-services.module';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { RunTasksAfterGettingImageRecordsService }
	from '@run-post-success-tasks/run-tasks-after-getting-image-records.service';


@Injectable({providedIn: LibraryServicesModule})
export class InterpretGetLibraryImagesResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleGetLibraryImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageRecordsService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
