import { Injectable } from '@angular/core';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { RunTasksAfterDeletingImagesService } from './run-tasks-after-deleting-images.service';
import { GlobalActionMenuServicesModule } from '@global-action-menu/global-action-menu-services-module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
