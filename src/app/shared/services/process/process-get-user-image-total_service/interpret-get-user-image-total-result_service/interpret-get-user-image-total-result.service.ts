import { Injectable } from '@angular/core';
import { HandleGetUserImageTotalErrorService } from './handle-get-user-image-total-error.service';
import { RunTasksAfterGettingUserImageTotalService }
	from './run-tasks-after-getting-user-image-total.service';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretGetUserImageTotalResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleGetUserImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingUserImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
