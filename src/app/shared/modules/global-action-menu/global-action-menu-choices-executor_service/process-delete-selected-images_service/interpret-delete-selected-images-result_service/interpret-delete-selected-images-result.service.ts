import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { InterpretDataTransportResultService }
	from '@process-related/interpret-data-transport-result.service';
import { HandleDbOperationErrorService }
	from '@process-related/handle-error/handle-db-operation-error/handle-db-operation-error.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class InterpretDeleteSelectedImagesResultService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
