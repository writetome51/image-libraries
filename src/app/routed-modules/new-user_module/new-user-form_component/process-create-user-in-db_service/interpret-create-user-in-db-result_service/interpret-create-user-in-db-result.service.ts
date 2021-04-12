import { HandleCreateUserInDbErrorService } from './handle-create-user-in-db-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingUserInDbService } from './run-tasks-after-creating-user-in-db.service';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserInDbResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleCreateUserInDbErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserInDbService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
