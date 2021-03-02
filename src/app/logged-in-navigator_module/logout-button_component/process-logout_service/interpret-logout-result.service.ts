import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { HandleDataTransportErrorService }
	from '@services/process-related/handle-data-transport-error/handle-data-transport-error.service';
import { RunTasksAfterLogoutService }
	from '@services/process-related/run-post-success-tasks/run-tasks-after-logout.service';
import { InterpretDataTransportResultService }
	from '@services/process-related/interpret-data-transport-result.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
