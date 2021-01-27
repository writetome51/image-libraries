import { Injectable } from '@angular/core';
import { HandleGetImageTotalErrorService } from '../../get-image-total-result-interpreter/handle-get-image-total-error.service';
import { RunTasksAfterGettingUserImageTotalService }
	from './run-tasks-after-getting-user-image-total.service';
import { GetImageTotalResultInterpreterService }
	from '../../get-image-total-result-interpreter/get-image-total-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class GetUserImageTotalResultInterpreterService
	extends GetImageTotalResultInterpreterService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingUserImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
