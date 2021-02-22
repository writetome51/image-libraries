import { InterpretDataTransportResultService }	// tslint:disable-next-line:max-line-length
	from '@data-transport-processor/../../../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleCreateUserErrorService } from './handle-create-user-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewUserService } from './run-tasks-after-creating-new-user.service';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
