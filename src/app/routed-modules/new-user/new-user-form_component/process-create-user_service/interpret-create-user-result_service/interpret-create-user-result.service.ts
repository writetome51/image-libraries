import { HandleCreateUserErrorService } from './handle-create-user-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewUserService } from './run-tasks-after-creating-new-user.service';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';
import { InterpretDataTransportResultService } from '@services/process/interpret-data-transport-result.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
