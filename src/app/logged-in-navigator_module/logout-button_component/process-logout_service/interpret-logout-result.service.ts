import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { Injectable } from '@angular/core';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { RunTasksAfterLogoutService }
	from '@process/run-post-success-tasks/run-tasks-after-logout.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class InterpretLogoutResultService extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: RunTasksAfterLogoutService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
