import { HandleCreateUserErrorService } from './handle-create-user-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingNewUserService } from './run-tasks-after-creating-new-user.service';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingNewUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
