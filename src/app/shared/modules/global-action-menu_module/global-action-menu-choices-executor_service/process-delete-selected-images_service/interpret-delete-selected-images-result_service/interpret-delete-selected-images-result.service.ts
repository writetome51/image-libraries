import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class InterpretDeleteSelectedImagesResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
