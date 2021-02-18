import { InterpretDataTransportResultService }
	from '@data-transport-processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule }
	from '@app/logged-in-navigator_module/logged-in-navigator-services.module';
import { RunTasksAfterLogoutService }
	from '@data-transport-processor/interpret-data-transport-result/run-post-success-tasks/run-tasks-after-logout.service';
import { HandleDataTransportErrorService }
	from '@data-transport-processor/interpret-data-transport-result/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn:  LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
