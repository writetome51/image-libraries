import { HandleGetImageTotalErrorService }
	from '../../get-image-total-result-interpreter/handle-get-image-total-error.service';
import { Injectable } from '@angular/core';
import { InterpretGetImageTotalResultService }
	from '../../get-image-total-result-interpreter/interpret-get-image-total-result.service';
import { RunTasksAfterGettingLibraryImageTotalService }
	from './run-tasks-after-getting-library-image-total.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibraryImageTotalResultService
	extends InterpretGetImageTotalResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
