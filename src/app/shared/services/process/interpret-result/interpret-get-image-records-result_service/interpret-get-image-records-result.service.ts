import { HandleGetImageRecordsErrorService } from './handle-get-image-records-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImageRecordsService }
	from '@run-post-success-tasks/run-tasks-after-getting-image-records.service';
import { InterpretExistingUserDBOperationResultService }
	from '../interpret-existing-user-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretGetImageRecordsResultService
	extends InterpretExistingUserDBOperationResultService {

	constructor(
		__handleError: HandleGetImageRecordsErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageRecordsService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
