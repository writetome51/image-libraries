import { Injectable } from '@angular/core';
import { HandleGetImageTotalErrorService }
	from '../../get-image-total-result-interpreter/handle-get-image-total-error.service';
import { RunTasksAfterGettingUserImageTotalService }
	from './run-tasks-after-getting-user-image-total.service';
import { InterpretGetImageTotalResultService }
	from '../../get-image-total-result-interpreter/interpret-get-image-total-result.service';


@Injectable({providedIn: 'root'})
export class InterpretGetUserImageTotalResultService extends InterpretGetImageTotalResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingUserImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
