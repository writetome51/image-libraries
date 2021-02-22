import { InterpretDataTransportResultService }
	from '@services/processor-related/../../../../shared/services/processor/interpret-result/interpret-data-transport-result/interpret-data-transport-result.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterUpdatingPasswordService }
	from './run-tasks-after-updating-password.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';
import { HandleDataTransportErrorService } from '@services/processor-related/../../../../shared/services/processor/handle-error/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class InterpretUpdatePasswordResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterUpdatingPasswordService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
