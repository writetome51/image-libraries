import { Injectable } from '@angular/core';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { RunTasksAfterLogoutService }
	from '@run-post-success-tasks/run-tasks-after-logout.service';
import { HandleExistingUserDBOperationErrorService }
	from '@handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
