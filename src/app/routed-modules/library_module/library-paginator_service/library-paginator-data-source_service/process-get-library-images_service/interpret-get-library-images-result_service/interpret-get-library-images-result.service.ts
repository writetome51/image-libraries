import { HandleGetLibraryImagesErrorService } from './handle-get-library-images-error.service';
import { Injectable } from '@angular/core';
import { LibraryServicesModule } from '../../../../library-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';
import { RunTasksAfterGettingImagesService }
	from '@run-post-success-tasks/run-tasks-after-getting-images.service';


@Injectable({providedIn: LibraryServicesModule})
export class InterpretGetLibraryImagesResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleGetLibraryImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
