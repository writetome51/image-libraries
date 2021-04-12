import { HandleCreateUserInDbErrorService } from '../process-create-user-in-db_service/interpret-create-user-in-db-result_service/handle-create-user-in-db-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingUserInDbService } from '../process-create-user-in-db_service/interpret-create-user-in-db-result_service/run-tasks-after-creating-user-in-db.service';
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
