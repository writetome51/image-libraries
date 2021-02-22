import { HandleDataTransportErrorService }
	from '@data-transport-processor/../../../shared/services/processor/handle-data-transport-error/handle-data-transport-error.service';
import { InterpretDataTransportResultService }
	from '@data-transport-processor/../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
