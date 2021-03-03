import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { HandleDbOperationErrorService }
	from '@process-related/handle-error/handle-db-operation-error_service/handle-db-operation-error.service';
import { RunTasksAfterLogoutService }
	from '@services/process-related/run-post-success-tasks/run-tasks-after-logout.service';
import { InterpretDataTransportResultService }
	from '@services/process-related/interpret-data-transport-result.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
