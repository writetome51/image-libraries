import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingUserService } from './run-tasks-after-deleting-user.service';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { HandleErrorService } from '@process/handle-error/handle-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretDeleteUserResultService extends InterpretResultService {

	constructor(
		__handleErrorService: HandleErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__handleErrorService, __runPostSuccessTasks);
	}

}
