import { InterpretDataTransportResultService } // tslint:disable-next-line:max-line-length
	from '@services/process-related/../../../../../shared/services/processor/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterDeletingUserService } from './run-tasks-after-deleting-user.service';
import { UpdateUserServicesModule }
	from '@app/routed-modules/update-user/update-user-services.module';
import { HandleDataTransportErrorService }
	from '@services/process-related/../../../../../shared/services/processor/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretDeleteUserResultService extends InterpretDataTransportResultService {

	constructor(
		__handleErrorService: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletingUserService
	) {
		super(__handleErrorService, __runPostSuccessTasks);
	}

}
