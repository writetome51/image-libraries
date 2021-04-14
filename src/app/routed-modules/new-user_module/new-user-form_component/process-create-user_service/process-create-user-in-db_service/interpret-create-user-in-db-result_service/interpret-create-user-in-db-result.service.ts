import { HandleCreateUserInDbErrorService } from './handle-create-user-in-db-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterCreatingUserInDbService }
	from './run-tasks-after-creating-user-in-db.service';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class InterpretCreateUserInDbResultService extends InterpretResultService {

	constructor(
		__handleError: HandleCreateUserInDbErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserInDbService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
