import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { InterpretDataTransportResultService }
	from '@services/process/interpret-data-transport-result.service';
import { HandleDbOperationErrorService }
	from '@services/process/handle-error/handle-db-operation-error_service/handle-db-operation-error.service';


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
