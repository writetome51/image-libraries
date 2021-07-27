import { Injectable } from '@angular/core';
import { NewUserFormServicesModule } from '../../../new-user-form-services.module';
import { RunTasksAfterCreatingUserService } from './run-tasks-after-creating-user.service';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { HandleCreateUserErrorService } from './handle-create-user-error.service';


@Injectable({providedIn: NewUserFormServicesModule})
export class InterpretCreateUserResultService extends InterpretResultService {

	constructor(
		__handleError: HandleCreateUserErrorService,
		__runPostSuccessTasks: RunTasksAfterCreatingUserService,
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
