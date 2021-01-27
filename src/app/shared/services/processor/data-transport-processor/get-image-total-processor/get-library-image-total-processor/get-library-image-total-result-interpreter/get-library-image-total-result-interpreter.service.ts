import { Injectable } from '@angular/core';
import { HandleGetImageTotalErrorService }
	from '../../get-image-total-result-interpreter/handle-get-image-total-error.service';
import { RunTasksAfterGettingLibraryImageTotalService }
	from './run-tasks-after-getting-library-image-total.service';
import { GetImageTotalResultInterpreterService }
	from '../../get-image-total-result-interpreter/get-image-total-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalResultInterpreterService
	extends GetImageTotalResultInterpreterService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
