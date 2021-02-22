import { Injectable } from '@angular/core';
import { InterpretDataTransportResultService }
	from '@data-transport-processor/../../../../../../services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '../../../../global-action-menu-services.module';
import { HandleDataTransportErrorService }
	from '@data-transport-processor/../../../../../../services/processor/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class InterpretDeleteSelectedImagesResultService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
