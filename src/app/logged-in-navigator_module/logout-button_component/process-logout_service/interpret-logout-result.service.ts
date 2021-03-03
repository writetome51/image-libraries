import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { RunTasksAfterLogoutService }
	from '@process/run-post-success-tasks/run-tasks-after-logout.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
