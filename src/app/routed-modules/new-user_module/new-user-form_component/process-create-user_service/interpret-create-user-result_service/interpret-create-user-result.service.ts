import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';
import { HandleCreateUserErrorService } from './handle-create-user-error.service';
import { RunTasksAfterCreatingUserService } from './run-tasks-after-creating-user.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
