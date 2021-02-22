import { Injectable } from '@angular/core';
import { HandleGetImageTotalErrorService }
	from '../../interpret-get-image-total-result/handle-get-image-total-error.service';
import { RunTasksAfterGettingUserImageTotalService }
	from './run-tasks-after-getting-user-image-total.service';
import { InterpretGetImageTotalResultService }
	from '../../interpret-get-image-total-result/interpret-get-image-total-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretGetUserImageTotalResultService extends InterpretGetImageTotalResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingUserImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
